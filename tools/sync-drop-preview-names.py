"""Read current baseline workbook through the project's existing exporter.

Retains only the names needed for the drop articles. Full exports are temporary.
No game files, workbooks, release packages or original research files are edited.
"""
from __future__ import annotations

import argparse
import csv
import hashlib
import io
import json
import re
import shutil
import subprocess
import unicodedata
import zipfile
from datetime import datetime, timedelta, timezone
from pathlib import Path

BLOG = Path(__file__).resolve().parents[1]
BBS = BLOG.parent
# Reviewed Japanese wording differences between the supplied index and patch.
# Mission labels extract only the name from a confirmed translated sentence.
ALIASES = {
    'アーマー・オブ・ザ・マスター': ('アーマーオブザマスター', None),
    'フック': ('フック船長', None),
    '試作品221号': ('試作品221号を撃退しろ！', r'^击退(.+)！$'),
    'マレフィセントの手下': ('マレフィセントの手下をやっつけろ！', r'^击败(.+)！$'),
}


def clean(text: str) -> str:
    text = re.sub(r'\{:[^}]*\}', '', text)
    return unicodedata.normalize('NFC', text).strip()


def synchronize(source_zip: Path, keep_work: bool) -> dict:
    baseline_path = BBS / 'work/releases/bbsfm-patch/baseline-manifest.json'
    baseline = json.loads(baseline_path.read_text(encoding='utf-8-sig'))
    workbook = Path(baseline['source_workbook'])
    workbook_hash = hashlib.sha256(workbook.read_bytes()).hexdigest()
    if workbook_hash != baseline['source_workbook_sha256']:
        raise ValueError('Workbook no longer matches the current release source; resolve provenance before syncing names.')
    targets = {}
    with zipfile.ZipFile(source_zip) as archive:
        for name, jp_key, en_key, kind in [
            ('items.csv', 'Item_JP', 'Item_EN', 'item'),
            ('enemies.csv', 'Enemy_JP', 'Enemy_EN', 'enemy'),
        ]:
            for row in csv.DictReader(io.StringIO(archive.read('khbbsfm-drop-database/' + name).decode('utf-8-sig'))):
                targets[(kind, row[en_key])] = {'kind': kind, 'ja': row[jp_key], 'en': row[en_key]}
    for jp, en in [('テラ','Terra'),('ヴェントゥス','Ventus'),('アクア','Aqua'),('ラックアップ','Lucky Strike'),('トレジャーレイド','Treasure Raid')]:
        targets[('label', en)] = {'kind': 'label', 'ja': jp, 'en': en}
    worlds_path = BLOG / 'tools/drop-preview-worlds.json'
    if worlds_path.exists():
        for en, jp in json.loads(worlds_path.read_text(encoding='utf-8'))['world_japanese'].items():
            targets[('world', en)] = {'kind': 'world', 'ja': jp, 'en': en}

    stamp = datetime.now(timezone(timedelta(hours=8))).strftime('%Y%m%d-%H%M%S')
    runs = (BBS / 'work/runs').resolve()
    run = runs / (stamp + '-blog-drop-patch-names')
    run.mkdir(parents=True, exist_ok=False)
    try:
        powershell = shutil.which('pwsh.exe') or 'C:/Program Files/PowerShell/7/pwsh.exe'
        command = [powershell, '-NoProfile', '-ExecutionPolicy', 'Bypass', '-File',
                   str(BBS / 'translation/Export-BbsWorkbookTranslations.ps1'),
                   '-WorkbookPath', str(workbook), '-OutputDirectory', str(run / 'translations')]
        result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        (run / 'export.log').write_bytes(result.stdout)
        if result.returncode:
            raise RuntimeError('Project workbook exporter failed. ' + result.stdout.decode('utf-8', errors='replace')[-3000:])
        rows = json.loads((run / 'translations/ctd-workbook-rows.json').read_text(encoding='utf-8-sig'))
        by_ja, normalized = {}, {}
        for row in rows:
            by_ja.setdefault(clean(row['sourceText']), []).append(row)
            normalized.setdefault(unicodedata.normalize('NFKC', clean(row['sourceText'])), []).append(row)
        l2d_by_ja, l2d_normalized = {}, {}
        for line in (run / 'translations/l2d-translated.jsonl').read_text(encoding='utf-8-sig').splitlines():
            if not line.strip():
                continue
            row = json.loads(line)
            source = clean(row['jp'])
            selected = row.get('manual_translation') or row.get('ai_translation') or row.get('translated_text') or row['jp']
            candidate = {'sourceText': row['jp'], 'translatedText':selected, 'key':row['key'], 'resourcePath':row['resource_path']}
            l2d_by_ja.setdefault(source, []).append(candidate)
            l2d_normalized.setdefault(unicodedata.normalize('NFKC',source), []).append(candidate)
        names, unresolved = [], []
        for target in targets.values():
            source = clean(target['ja'])
            lookup, extraction = ALIASES.get(source, (source, None))
            candidates = (by_ja.get(lookup) or normalized.get(unicodedata.normalize('NFKC',lookup))
                          or l2d_by_ja.get(lookup) or l2d_normalized.get(unicodedata.normalize('NFKC',lookup)) or [])
            translations = {clean(r['translatedText']) for r in candidates if clean(r['translatedText'])}
            if extraction:
                translations = {re.fullmatch(extraction, value).group(1) for value in translations
                                if re.fullmatch(extraction, value)}
            entry = dict(target)
            if len(translations) == 1:
                entry.update(zh=next(iter(translations)), keys=[r['key'] for r in candidates],
                             resources=sorted({r['resourcePath'] for r in candidates}),
                             source_japanese=sorted({r['sourceText'] for r in candidates}),
                             lookup_japanese=lookup, extraction=extraction)
                names.append(entry)
            else:
                entry.update(reason='not_found' if not translations else 'multiple_translations',
                    candidates=[{'zh':clean(r['translatedText']), 'key':r['key'], 'resource':r['resourcePath']} for r in candidates])
                unresolved.append(entry)
        report = {
            'format': 1, 'patch_version': baseline['patch_version'],
            'workbook': workbook.name, 'workbook_sha256': workbook_hash,
            'source': 'Current ordinary baseline manifest + project workbook exporter; exact Japanese lookup with Unicode width/Roman numeral equivalence, CTD then L2D.',
            'names': names, 'unresolved': unresolved,
        }
        output = BLOG / 'tools/drop-preview-names.json'
        output.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
        return {'patch_version':report['patch_version'], 'matched':len(names),
                'matched_items':sum(r['kind']=='item' for r in names),
                'matched_enemies':sum(r['kind']=='enemy' for r in names),
                'unresolved':unresolved, 'output':str(output)}
    finally:
        if not keep_work:
            resolved = run.resolve()
            if runs not in resolved.parents or run.is_symlink():
                raise RuntimeError('Unsafe temporary export cleanup path')
            shutil.rmtree(run)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source-zip', type=Path, default=Path('D:/敌人掉落反向索引/khbbsfm-drop-database.zip'))
    parser.add_argument('--keep-work', action='store_true')
    args = parser.parse_args()
    print(json.dumps(synchronize(args.source_zip.resolve(), args.keep_work), ensure_ascii=False, indent=2))
