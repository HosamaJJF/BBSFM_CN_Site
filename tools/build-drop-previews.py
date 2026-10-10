"""Build the published Hexo item-drop article from the research archive.

Only reads archive members as data. Does not run scripts from the archive.
Run: python -X utf8 tools/build-drop-previews.py
Local build: ./tools/Build-DropPreviews.ps1 (see tools/DROP_PREVIEWS.md)
Normal Hexo builds include the generated post. This script does not push Git.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import html
import io
import json
import re
import zipfile
from collections import defaultdict
from pathlib import Path

BLOG = Path(__file__).resolve().parents[1]
PREFIX = "khbbsfm-drop-database/"
SLUG = "bbs-drops-items"
TITLE = "物品掉落来源与概率查询"
CHARACTERS = {"Terra": "泰拉", "Ventus": "维恩图斯", "Aqua": "阿库娅"}


def esc(value: object) -> str:
    return html.escape(str(value), quote=True)


def attrs(**values: object) -> str:
    return " ".join(f'data-{k.replace("_", "-")}="{esc(v)}"' for k, v in values.items())


def links(value: str) -> str:
    urls = [u.strip() for u in value.split(" ; ") if u.strip()]
    return " · ".join(
        f'<a href="{esc(u)}" target="_blank" rel="noopener noreferrer">来源 {i}</a>'
        for i, u in enumerate(urls, 1) if u.startswith(("https://", "http://"))
    ) or "未提供链接"


def role_names(value: str) -> str:
    return "、".join(CHARACTERS.get(s.strip(), s.strip()) for s in value.split(";"))


def category(value: str) -> str:
    return "冰淇淋材料" if "冰淇淋" in value else value


class NameMap(dict):
    def __init__(self, entries: list[dict]):
        super().__init__()
        self.replacements = {}
        for entry in entries:
            ja, en, zh = entry['ja'], entry['en'], entry['zh']
            for key in (ja, en):
                if key in self and self[key] != zh:
                    raise ValueError(f'Ambiguous translated name: {key}')
                self[key] = zh
            for original in (ja, en):
                self.replacements[original] = f'{zh}（{original}）'
            for original in (f'{en}（{ja}）', f'{ja} / {en}'):
                self.replacements[original] = f'{zh}（{ja} / {en}）'
            for original in (f'{zh}（{en}）', f'{zh}（{ja}）'):
                self.replacements[original] = original
        alternatives = []
        for key in sorted(self.replacements, key=len, reverse=True):
            alternatives.append(('(?<![A-Za-z0-9_])' if re.match('[A-Za-z0-9_]', key) else '') + re.escape(key)
                                + ('(?![A-Za-z0-9_])' if re.search('[A-Za-z0-9_]$', key) else ''))
        self.pattern = re.compile('|'.join(alternatives))


def chinese_names() -> tuple[NameMap, dict]:
    report = json.loads((BLOG / 'tools/drop-preview-names.json').read_text(encoding='utf-8'))
    baseline = json.loads((BLOG.parent / 'work/releases/bbsfm-patch/baseline-manifest.json').read_text(encoding='utf-8-sig'))
    if (report['patch_version'], report['workbook_sha256']) != (baseline['patch_version'], baseline['source_workbook_sha256']):
        raise RuntimeError('Patch translation source changed. Run tools/sync-drop-preview-names.py first.')
    names = NameMap(report['names'])
    names.world_data = json.loads((BLOG / 'tools/drop-preview-worlds.json').read_text(encoding='utf-8'))
    assert all(world in names for world in names.world_data['world_japanese']), 'Sync patch world names first'
    return names, report


def localize(text: str, name_map: NameMap) -> str:
    """Annotate prose while preserving URLs, HTML attributes and code verbatim."""
    protected = re.compile(r'(```[\s\S]*?```|`[^`\n]+`|https?://[^\s<>）]+|<[^>]+>|(?<=\]\()[^)\s]+)')
    return ''.join(part if index % 2 else name_map.pattern.sub(lambda m: name_map.replacements[m.group()], part)
                   for index, part in enumerate(protected.split(text)))


def raw(content: str) -> str:
    return "\n{% raw %}\n" + content + "\n{% endraw %}\n"


def introduction(scope: str) -> str:
    return raw('<div class="drop-preview dp-intro"><p class="dp-kicker">BIRTH BY SLEEP FINAL MIX · 掉落物查询</p>'
               f'<p class="dp-note">{scope}</p></div>')


def article(body: str) -> str:
    description = '按物品、角色、敌人出现世界和商店等级查询BBS FINAL MIX掉落来源与基础概率。'
    front = (f"---\ntitle: '{TITLE}'\ndate: 2026-10-10 00:00:00\n"
             "updated: 2026-10-10 00:00:00\ncategories:\n  - 攻略资料\ntags:\n  - BBSFM\n  - 敌人掉落\n"
             f"description: '{description}'\n"
             "toc: false\ncomments: false\ncover: false\ntop_img: false\n"
             "item_drops_generated: true\n---\n")
    return front + body


def display_condition(value: str, name_map: NameMap) -> str:
    value = re.sub(r'不同世界[/／]战斗等级不擅自拆成不同掉落表[。.]?', '', value)
    return localize(value.strip('；; '), name_map)


def row_worlds(row: dict, name_map: NameMap) -> dict[str, list[str]]:
    roles = [value.strip() for value in row['Characters'].split(';') if value.strip()]
    if row['World'] != '未知':
        return {row['World']: roles}
    if 'Olympus Coliseum' in row['Enemy_Variant']:
        return {'Olympus Coliseum': roles}
    if 'Secret Episode' in row['Enemy_Variant']:
        return {'Realm of Darkness': ['Aqua']}
    selected = defaultdict(list)
    for role, worlds in name_map.world_data['enemies'][row['Enemy_EN']]['worlds_by_character'].items():
        if role in roles:
            for world in worlds:
                selected[world].append(role)
    assert selected, f'No appearance worlds for {row["Record_ID"]}'
    return dict(selected)


def appearance_html(worlds: dict, name_map: NameMap) -> str:
    return '<div class="dp-worlds"><span class="dp-world-label">出现世界</span><span class="dp-world-list">' + ''.join(
        f'<span class="dp-world" {attrs(world=world, world_roles=";".join(roles))} '
        f'title="{esc(name_map.world_data["world_japanese"][world])} / {esc(world)}">{esc(name_map[world])}</span>'
        for world, roles in worlds.items()) + '</span></div>'


def shop_guide(name_map: NameMap) -> str:
    shop = name_map.world_data['shop']
    actions = {'start': '游戏开始', 'complete_one': '通关下列世界中的任意一个',
               'complete_two': '通关下列世界中的任意两个', 'complete_all': '通关下列全部世界'}
    rows = []
    for milestone in shop['milestones']:
        worlds = '、'.join(name_map[world] for world in milestone['worlds'])
        condition = actions[milestone['action']]
        if len(milestone['worlds']) == 1:
            condition = '通关'
        rows.append(f'<tr><th scope="row">{milestone["level"]}</th><td>{condition}' + (f'：{esc(worlds)}' if worlds else '') + '</td></tr>')
    return ('<aside class="drop-preview dp-shop-guide" aria-label="商店等级说明">'
            '<p><strong>Shop Level（商店等级）</strong>表示莫古力指令商店随剧情解锁的库存阶段，共 1～8 级。'
            '推进当前角色的主线并通关对应世界，就会提升商店等级、解锁更多商品；本表也用它区分敌人的掉落池。'
            '刷角色经验或反复购买商品不会提升这个等级。</p>'
            '<details id="shop-level-guide"><summary>查看 Shop Level 1～8 的提升条件</summary>'
            '<p>按当前角色已通关的世界对照。这里的“通关”指完成该世界的主线剧情。</p>'
            '<table class="dp-shop-table"><thead><tr><th scope="col">Shop Level</th><th scope="col">达到该等级的剧情条件</th></tr></thead><tbody>'
            + ''.join(rows) + '</tbody></table>'
            '</details></aside>')


def evidence(row: dict, name_map: dict) -> str:
    fields = [
        ("版本适用", row["Version"]), ("核实说明", row["Verification"]),
        ("概率口径", row["Rate_Basis"]), ("基础箱率", row["Base_Drop_Rate"] or "未知／不适用"),
        ("箱内权重", row["Conditional_Item_Rate"] or "未知／不适用"),
        ("补充备注", row["Notes"] or "—"), ("记录编号", row["Record_ID"]),
        ("来源修订", row["Source_Revision"] or "—"), ("来源字段", row["Source_Field"] or "—"),
    ]
    appearance = name_map.world_data['enemies'][row['Enemy_EN']]
    return '<details class="dp-evidence"><summary>来源与核对</summary><dl>' + "".join(
        f'<dt>{esc(k)}</dt><dd>{esc(localize(v, name_map) if k in ("核实说明", "补充备注") else v)}</dd>' for k, v in fields
    ) + f'</dl><p>{links(row["Source_URL"])}</p><p>交叉核对：{links(row["Crosscheck_URL"])}</p>' + (
        f'<p>出现世界：<a href="{esc(appearance["source_url"])}?oldid={appearance["revision"]}" target="_blank" rel="noopener noreferrer">'
        f'KHWiki · 修订 {appearance["revision"]}</a>（按角色查表）</p></details>')


def row_html(row: dict, name_map: dict) -> str:
    worlds = row_worlds(row, name_map)
    roles = '; '.join(role for role in CHARACTERS if any(role in selected for selected in worlds.values()))
    cn = name_map.get(row['Enemy_JP'], '')
    name = (esc(cn or row['Enemy_JP']) + f'<small lang="ja">{esc(row["Enemy_JP"])}</small>'
            f'<small lang="en">{esc(row["Enemy_EN"])}</small>')
    target = name_map.world_data['enemies'][row['Enemy_EN']]['source_url']
    conflict = "冲突" in row["Verification"] or "单源" in row["Verification"]
    badge = '<span class="dp-badge dp-warning">单源／有争议</span>' if conflict else ''
    world_html = appearance_html(worlds, name_map)
    conditions = display_condition(row['Conditions'], name_map)
    state = attrs(roles=roles, shop=row["Shop_Level"],
                  drop_type=row["Drop_Type"], record_id=row["Record_ID"])
    return (f'<tr class="dp-record" {state}>'
            f'<td data-label="敌人"><a href="{target}" class="dp-name" target="_blank" rel="noopener noreferrer">{name}</a>{badge}'
            f'<small>{esc(localize(row["Enemy_Variant"], name_map))}</small></td>'
            f'<td data-label="角色／世界"><strong class="dp-role-names" {attrs(role_label=role_names(roles))}>{esc(role_names(roles))}</strong>'
            f'{world_html}<small class="dp-condition">{esc(conditions)}</small>'
            f'<span class="dp-type">{esc(row["Drop_Type"])}</span></td>'
            f'<td data-label="商店等级">{esc(row["Shop_Level"])}</td>'
            f'<td data-label="基础概率" class="dp-rate">{esc(row["Drop_Rate"])}</td>'
            f'<td data-label="资料">{evidence(row, name_map)}</td></tr>')


def table(rows: list[dict], name_map: dict) -> str:
    return ('<div class="dp-table-wrap"><table class="dp-table"><thead><tr>'
            f'<th scope="col">掉落敌人</th>'
            '<th scope="col">角色／出现世界与条件</th><th scope="col">商店等级</th>'
            '<th scope="col">基础概率</th><th scope="col">资料</th></tr></thead><tbody>' +
            ''.join(row_html(r, name_map) for r in rows) + '</tbody></table></div>')


def controls(cats: list[str], name_map: NameMap) -> str:
    label = "物品名称"
    text = "输入中文、日文或英文名称"
    role = '<label>角色<select data-filter="role"><option value="">全部角色</option>' + ''.join(
        f'<option value="{en}">{cn} / {en}</option>' for en, cn in CHARACTERS.items()) + '</select></label>'
    extra = '<label>分类<select data-filter="category"><option value="">全部分类</option>' + ''.join(
        f'<option>{esc(c)}</option>' for c in cats or []) + '</select></label>'
    extra += '<label>出现世界<select data-filter="world"><option value="">全部世界</option>' + ''.join(
        f'<option value="{esc(world)}">{esc(name_map[world])}</option>'
        for world in name_map.world_data['world_japanese'] if world in name_map.query_worlds) + '</select></label>'
    extra += '<label>商店等级（Shop Level）<select data-filter="shop"><option value="">全部／未指定</option>' + ''.join(
        f'<option value="{i}">Shop Level {i}</option>' for i in range(1, 9)) + '</select></label>'
    extra += '<label>获取方式<select data-filter="type"><option value="">全部方式</option><option>击败随机掉落</option><option>受击材料掉落</option></select></label>'
    return (f'<form class="dp-controls" role="search"><label class="dp-search">{label}<input data-filter="query" type="search" placeholder="{text}" autocomplete="off"></label>'
            + role + extra + '<button type="reset" class="dp-reset">重置筛选</button></form>'
            '<div class="dp-result-bar"><p data-result-count aria-live="polite"></p>'
            '<span class="dp-note">展开条目查看完整条件</span></div>'
            '<p class="dp-empty" data-empty hidden>没有符合条件的条目。可以减少筛选条件后再查找。</p>')


def query_footer() -> str:
    return ('<div class="dp-pagination" aria-label="结果分页"><button type="button" data-page="prev">上一页</button>'
            '<span data-page-label aria-live="polite"></span><button type="button" data-page="next">下一页</button></div>'
            '<noscript><p>未启用 JavaScript：以下展示全部条目，可使用浏览器的页面查找功能。</p></noscript>')


def script_tag() -> str:
    return '<script data-pjax src="/js/drop-previews.js"></script>'


def build(source_zip: Path) -> dict:
    name_map, name_report = chinese_names()
    patch_version = name_report['patch_version']
    with zipfile.ZipFile(source_zip) as archive:
        def read(name: str) -> str:
            return archive.read(PREFIX + name).decode("utf-8-sig")

        def records(name: str) -> list[dict]:
            return list(csv.DictReader(io.StringIO(read(name))))

        items, drops, enemies = records("items.csv"), records("enemy_drops.csv"), records("enemies.csv")
        coverage = json.loads(read("coverage.json"))
        assert len(items) == coverage["items"]
        assert len(drops) == coverage["enemy_item_condition_records"]
        assert len(enemies) == coverage["enemy_roster_records"]
        assert len({r["Record_ID"] for r in drops}) == len(drops)
        assert all(r["Item_ID"] in {i["Item_ID"] for i in items} for r in drops)
        assert all(r["Enemy_ID"] in {e["Enemy_ID"] for e in enemies} for r in drops)
        assert all(i['Item_JP'] in name_map for i in items), 'Missing patch item translation'
        assert all(r['Enemy_JP'] in name_map for r in drops), 'Missing patch name for a known drop enemy'
        name_map.query_worlds = {world for row in drops for world in row_worlds(row, name_map)}
        by_item = defaultdict(list)
        for row in drops:
            by_item[row["Item_ID"]].append(row)

        sources = [
            ('Kingdom Hearts Wiki', 'https://www.khwiki.com/'),
            ('KH BBS FINAL MIX Wiki', 'https://wikiwiki.jp/kh_bbsfm/'),
            ('日文 KHBBS 攻略 Wiki', 'https://kh-bbs.gorillawiki.jp/'),
            ('GameFAQs', 'https://gamefaqs.gamespot.com/'),
        ]
        intro = raw('<div class="drop-preview dp-intro"><p class="dp-note">本文资料使用AI辅助整理，数据来源<br>' + '<br>'.join(
            f'{esc(label)}：<a href="{esc(url)}" target="_blank" rel="noopener noreferrer">{esc(url)}</a>'
            for label, url in sources) + '</p></div>')
        intro += introduction(
            f'收录 104 种物品、277 条掉落条件。中文名采用补丁 {patch_version} 译文，保留日英名称供检索。'
            '普通掉落概率为未计幸运提升的基础值；冰淇淋材料另按受击掉落记录。')
        content = '<section class="drop-preview dp-query" data-drop-query="items">' + controls(list(dict.fromkeys(category(r["Category"]) for r in items)), name_map)
        for index, item in enumerate(items):
            cn = name_map.get(item["Item_JP"], name_map.get(item["Item_EN"], ""))
            rows = by_item[item["Item_ID"]]
            group_attrs = attrs(search=' '.join((cn, item["Item_JP"], item["Item_EN"])), category=category(item["Category"]))
            content += (f'<details class="dp-group" id="{esc(item["Item_ID"])}" {group_attrs}' + (' open' if index == 0 else '') + '>'
                f'<summary><span class="dp-group-title"><strong>{esc(cn or item["Item_JP"])}</strong>'
                f'<small>{esc(item["Item_JP"])} / {esc(item["Item_EN"])}</small></span>'
                f'<span class="dp-group-meta">{esc(category(item["Category"]))}<small>{item["Enemy_Count"]} 种已知敌人 · <span data-group-count>{len(rows)}</span> 条条件</small></span></summary>'
                '<div class="dp-group-content">' + table(rows, name_map) + '</div></details>')
        content += query_footer() + '</section>' + script_tag()
        item_body = intro + '\n<!-- more -->\n' + raw(shop_guide(name_map)) + raw(content)
        item_body += ('\n## 怎样使用查询结果\n\n出现世界来自 KHWiki 的 BBS 分角色敌人资料；选择角色后，仅显示该角色可遇到的世界。'
                      '斗技大会、黑暗世界篇章和奖励罐材料沿用各条记录的特定场景或地点。'
                      '展开“来源与核对”可查看掉落依据、基础箱率、箱内权重及出现世界的资料修订。\n\n'
                      '概率未知表示已有掉落关系，但未提供具体百分比；来源有冲突的条件保留“单源／有争议”标记。\n\n')

    path = BLOG / 'source/_posts' / f'{SLUG}.md'
    if path.exists() and 'item_drops_generated: true' not in path.read_text(encoding='utf-8'):
        raise RuntimeError(f'Refusing to overwrite an unrelated article: {path}')
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(article(item_body).rstrip() + '\n', encoding='utf-8')
    return {"items": len(items), "condition_records": len(drops),
        "enemy_names": len({r['Enemy_EN'] for r in drops}),
        "patch_version": patch_version,
        "source_sha256": hashlib.sha256(source_zip.read_bytes()).hexdigest(),
        "article_path": f'/posts/{SLUG}/', "title": TITLE}


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source-zip', type=Path, default=Path('D:/敌人掉落反向索引/khbbsfm-drop-database.zip'))
    arguments = parser.parse_args()
    print(json.dumps(build(arguments.source_zip.resolve()), ensure_ascii=False, indent=2))
