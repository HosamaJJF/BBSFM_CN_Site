"""Convert the supplied synthesis workbook into a static Hexo article.

Usage: python3 tools/import-synthesis-xlsx.py /path/to/技能魔法合成表.xlsx
The generated article needs no spreadsheet library or browser script at build time.
"""

from __future__ import annotations

import argparse
import html
import posixpath
import re
import shutil
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


MAIN = "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
OFFICE_REL = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
PACKAGE_REL = "http://schemas.openxmlformats.org/package/2006/relationships"
NS = {"m": MAIN}
SECTIONS = [("攻击", "attack"), ("魔法", "magic"), ("其他", "other"), ("合成能力", "abilities")]
REPO = Path(__file__).resolve().parent.parent
POST = REPO / "source/_posts/skill-magic-synthesis.md"
DOWNLOAD = REPO / "source/downloads/skill-magic-synthesis.xlsx"


def column_number(letters: str) -> int:
    value = 0
    for letter in letters:
        value = value * 26 + ord(letter) - ord("A") + 1
    return value


def cell_position(ref: str) -> tuple[int, int]:
    match = re.fullmatch(r"([A-Z]+)([0-9]+)", ref)
    if not match:
        raise ValueError(f"Invalid cell reference: {ref}")
    return int(match.group(2)), column_number(match.group(1))


def read_sheets(path: Path) -> dict[str, tuple[int, int, dict, dict, set]]:
    sheets = {}
    with zipfile.ZipFile(path) as archive:
        strings = []
        if "xl/sharedStrings.xml" in archive.namelist():
            shared_root = ET.fromstring(archive.read("xl/sharedStrings.xml"))
            strings = ["".join(t.text or "" for t in item.iter(f"{{{MAIN}}}t"))
                       for item in shared_root.findall("m:si", NS)]
        workbook = ET.fromstring(archive.read("xl/workbook.xml"))
        rels = ET.fromstring(archive.read("xl/_rels/workbook.xml.rels"))
        targets = {rel.attrib["Id"]: rel.attrib["Target"]
                   for rel in rels.findall(f"{{{PACKAGE_REL}}}Relationship")}

        for sheet in workbook.findall("m:sheets/m:sheet", NS):
            target = targets[sheet.attrib[f"{{{OFFICE_REL}}}id"]].lstrip("/")
            sheet_path = target if target.startswith("xl/") else posixpath.normpath(posixpath.join("xl", target))
            root = ET.fromstring(archive.read(sheet_path))
            dimension = root.find("m:dimension", NS)
            if dimension is None:
                max_row, max_col = 0, 0
            else:
                max_row, max_col = cell_position(dimension.attrib["ref"].split(":")[-1])
            cells = {}
            formula_count = 0
            for row_node in root.findall("m:sheetData/m:row", NS):
                max_row = max(max_row, int(row_node.attrib["r"]))
            for cell in root.findall("m:sheetData/m:row/m:c", NS):
                position = cell_position(cell.attrib["r"])
                max_row, max_col = max(max_row, position[0]), max(max_col, position[1])
                value_node = cell.find("m:v", NS)
                inline = cell.find("m:is", NS)
                if cell.find("m:f", NS) is not None:
                    formula_count += 1
                if value_node is not None:
                    value = value_node.text or ""
                    if cell.attrib.get("t") == "s":
                        value = strings[int(value)]
                    elif sheet.attrib["name"] != "合成能力" and position[1] == 7 and cell.attrib.get("t") in (None, "n"):
                        value = f"{float(value) * 100:g}%"
                elif inline is not None:
                    value = "".join(t.text or "" for t in inline.iter(f"{{{MAIN}}}t"))
                else:
                    continue
                cells[position] = value

            spans = {}
            covered = set()
            for merge in root.findall("m:mergeCells/m:mergeCell", NS):
                start, end = merge.attrib["ref"].split(":")
                first_row, first_col = cell_position(start)
                last_row, last_col = cell_position(end)
                max_row, max_col = max(max_row, last_row), max(max_col, last_col)
                spans[(first_row, first_col)] = (last_row - first_row + 1, last_col - first_col + 1)
                for row in range(first_row, last_row + 1):
                    for col in range(first_col, last_col + 1):
                        if (row, col) != (first_row, first_col):
                            covered.add((row, col))

            if formula_count:
                raise ValueError(f"{sheet.attrib['name']} contains formulas; review their cached values before publishing")
            sheets[sheet.attrib["name"]] = (max_row, max_col, cells, spans, covered)
    return sheets


def render_sheet(name: str, slug: str, sheet: tuple) -> str:
    max_row, max_col, cells, spans, covered = sheet
    recipe_table = name != "合成能力"
    grouped_header = recipe_table and spans.get((1, 2)) == (1, 2)
    lines = [
        f'<section class="synthesis-section" id="synthesis-{slug}">',
        f'<h2>{html.escape(name)}</h2>',
    ]

    def is_blank_row(row: int) -> bool:
        positions = [(row, col) for col in range(1, max_col + 1)]
        return not any(cells.get(position) for position in positions) and not any(
            first_row < row < first_row + rowspan
            for (first_row, _), (rowspan, _) in spans.items()
        )

    table_ranges = []
    first_row = 1
    row = 1
    while row <= max_row:
        if name == "其他" and is_blank_row(row):
            next_row = row
            while next_row <= max_row and is_blank_row(next_row):
                next_row += 1
            if next_row - row >= 3 and next_row <= max_row:
                table_ranges.append((first_row, row - 1))
                first_row = next_row
            row = next_row
        else:
            row += 1
    table_ranges.append((first_row, max_row))

    for part, (first_row, last_row) in enumerate(table_ranges, start=1):
        label = f"{name}表格" if len(table_ranges) == 1 else f"{name}表格 {part}"
        caption = name if len(table_ranges) == 1 else label
        lines.extend([
            '<div class="synthesis-table-wrap" role="region" tabindex="0" '
            f'aria-label="{html.escape(label)}，可横向滚动">',
            f'<table class="synthesis-table synthesis-table--{slug}">',
            f'<caption>{html.escape(caption)}（源工作表）</caption>',
        ])
        for row in range(first_row, last_row + 1):
            if is_blank_row(row):
                lines.append(f'<tr class="synthesis-spacer"><td colspan="{max_col}"></td></tr>')
                continue
            is_header = row == first_row or (row == first_row + 1 and (not recipe_table or grouped_header))
            lines.append('<tr class="synthesis-header-row">' if is_header else '<tr>')
            for col in range(1, max_col + 1):
                position = (row, col)
                if position in covered:
                    continue
                value = cells.get(position, "")
                rowspan, colspan = spans.get(position, (1, 1))
                tag = "th" if is_header or (col == 1 and value) else "td"
                attrs = []
                if rowspan > 1:
                    attrs.append(f'rowspan="{rowspan}"')
                if colspan > 1:
                    attrs.append(f'colspan="{colspan}"')
                if tag == "th":
                    attrs.append(f'scope="{"colgroup" if colspan > 1 else "col"}"' if is_header else 'scope="row"')
                if recipe_table and col == 11:
                    attrs.append('class="synthesis-note"')
                elif recipe_table and col in (3, 5, 7):
                    attrs.append('class="synthesis-rate"' if col == 7 else 'class="synthesis-level"')
                if name == "合成能力" and col == 1 and value in "ABCDEFGHIJKLMNOP" and len(value) == 1:
                    attrs.append(f'id="ability-row-{value.lower()}"')
                is_name = (
                    (name == "合成能力" and ((is_header and 2 <= col <= 10) or (not is_header and 2 <= col <= 8)))
                    or (recipe_table and not is_header and col in (1, 2, 4))
                )
                if is_name and "\n" in value:
                    names = value.split("\n")
                    chinese, japanese = names[:2]
                    content = (
                        f'<span class="synthesis-name-cn">{html.escape(chinese)}</span>'
                        f'<span class="synthesis-name-ja" lang="ja">{html.escape(japanese)}</span>'
                    )
                    if len(names) > 2:
                        content += f'<span class="synthesis-name-en" lang="en">{html.escape(names[2])}</span>'
                else:
                    content = html.escape(value).replace("\n", "<br>")
                if recipe_table and col == 7 and value == "未确认":
                    content += '<br><small>Wiki 未收录此配方</small>'
                if recipe_table and col == 6 and len(value) == 1 and value in "ABCDEFGHIJKLMNOP":
                    content = f'<a href="#ability-row-{value.lower()}" title="查看合成能力 {content} 行">{content}</a>'
                if col in (8, 9, 10) and recipe_table and value in ("○", "×"):
                    attrs.append('class="synthesis-yes"' if value == "○" else 'class="synthesis-no"')
                    content = f'<span aria-label="{"可" if value == "○" else "不可"}">{content}</span>'
                suffix = " " + " ".join(attrs) if attrs else ""
                lines.append(f'<{tag}{suffix}>{content}</{tag}>')
            lines.append('</tr>')
        lines.extend(['</table>', '</div>'])
    lines.append('</section>')
    return "\n".join(lines)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("workbook", type=Path)
    args = parser.parse_args()
    sheets = read_sheets(args.workbook)
    missing = [name for name, _ in SECTIONS if name not in sheets]
    if missing:
        raise ValueError(f"Missing worksheet(s): {', '.join(missing)}")
    content = """---
title: 技能与魔法合成表(文本同步至1.0.3版补丁)
date: 2026-09-28 21:00:00
updated: 2026-09-28 21:00:00
categories:
  - 补丁发布
tags:
  - BBSFM
  - 合成表
  - 技能魔法
description: 攻击、魔法、其他指令及合成能力对照表。
---

感谢群友**透明人**整理翻译的技能合成表，本表会随着未来的补丁文本进行更新。

点击下方按钮可以快速跳转至对应板块。点击`对应合成行`列中的字母可以跳转查询能力表的对应位置。

<!-- more -->

<nav class="synthesis-nav" aria-label="合成表目录">
  <a href="#synthesis-attack">攻击</a>
  <a href="#synthesis-magic">魔法</a>
  <a href="#synthesis-other">其他</a>
  <a href="#synthesis-abilities">合成能力</a>
</nav>

<a href="/downloads/skill-magic-synthesis.xlsx" download data-no-instant>下载原始 Excel 表格</a>

"""
    if POST.exists():
        existing = POST.read_text(encoding="utf-8")
        if '<section class="synthesis-section"' in existing:
            content = existing.split('<section class="synthesis-section"', 1)[0]
    content += "\n\n".join(render_sheet(name, slug, sheets[name]) for name, slug in SECTIONS) + "\n"
    POST.write_text(content, encoding="utf-8")
    DOWNLOAD.parent.mkdir(parents=True, exist_ok=True)
    if args.workbook.resolve() != DOWNLOAD.resolve():
        shutil.copy2(args.workbook, DOWNLOAD)
    print(f"Wrote {POST} and {DOWNLOAD}")


if __name__ == "__main__":
    main()
