"""Refresh BBS enemy appearance worlds and Shop Level milestones from KHWiki.

Only saves the relevant structured facts, selected parameters and revision IDs.
Does not copy whole wiki articles or modify the original drop research archive.
"""
from __future__ import annotations

import argparse
import csv
import io
import json
import re
import urllib.parse
import urllib.request
import zipfile
from datetime import datetime, timezone
from pathlib import Path

BLOG = Path(__file__).resolve().parents[1]
WORLD_JP = {
    'Enchanted Dominion': 'エンチャンテッド・ドミニオン',
    'Castle of Dreams': 'キャッスル・オブ・ドリーム',
    'Dwarf Woodlands': 'ドワーフ・ウッドランド',
    'Mysterious Tower': 'ミステリアス・タワー',
    'Radiant Garden': 'レイディアントガーデン',
    'Disney Town': 'ディズニータウン',
    'Olympus Coliseum': 'オリンポスコロシアム',
    'Deep Space': 'ディープスペース',
    'Neverland': 'ネバーランド',
    'Keyblade Graveyard': 'キーブレード墓場',
    'Land of Departure': '旅立ちの地',
    'Realm of Darkness': '闇の世界',
    'Mirage Arena': 'ミラージュアリーナ',
}
ROLES = {'T': 'Terra', 'V': 'Ventus', 'A': 'Aqua'}


def wiki_text(value: str) -> str:
    value = re.sub(r'\[\[([^\]|]+)(?:\|[^\]]+)?\]\]', r'\1', value)
    value = re.sub(r'<ref\b[^>]*>.*?</ref>|<ref\b[^>]*/>', '', value, flags=re.S)
    return {'Never Land': 'Neverland'}.get(value.strip(), value.strip())


def fetch(titles: list[str]) -> list[dict]:
    params = dict(action='query', prop='revisions', rvprop='ids|timestamp|content',
                  rvslots='main', redirects=1, format='json', formatversion=2, titles='|'.join(titles))
    request = urllib.request.Request('https://www.khwiki.com/api.php?' + urllib.parse.urlencode(params),
                                    headers={'User-Agent': 'KH-CN-Blog-Research/1.0 (local guide data refresh)'})
    with urllib.request.urlopen(request, timeout=60) as response:
        data = json.load(response)
    if 'error' in data:
        raise RuntimeError(data['error'])
    return data['query']['pages']


def synchronize(source_zip: Path, refresh: bool = False, check_only: bool = False) -> dict:
    with zipfile.ZipFile(source_zip) as archive:
        rows = list(csv.DictReader(io.StringIO(archive.read('khbbsfm-drop-database/enemy_drops.csv').decode('utf-8-sig'))))
    enemies = sorted({row['Enemy_EN'] for row in rows})
    cache = BLOG.parent / 'work/cache/blog-drop-previews/wiki-appearance-input.json'
    if check_only and refresh:
        raise ValueError('--check requires the existing fact cache; do not combine with --refresh')
    if cache.exists() and not refresh:
        snapshot = json.loads(cache.read_text(encoding='utf-8'))
    elif check_only:
        raise FileNotFoundError('Fact cache not found; refresh the wiki facts first.')
    else:
        pages = fetch([*enemies, 'Moogle Shop'])
        snapshot = {'checked_at': datetime.now(timezone.utc).isoformat(), 'pages': []}
        for page in pages:
            revision = page['revisions'][0]
            text = revision['slots']['main']['content']
            short = {'title': page['title'], 'revision': revision['revid'], 'timestamp': revision['timestamp']}
            if page['title'] == 'Moogle Shop':
                section = re.search(r"^==\s*(?:'')?Kingdom Hearts Birth by Sleep(?:'')?\s*==\s*(.*?)(?=^==[^=]|\Z)", text, re.M | re.S)
                if not section:
                    raise ValueError('BBS shop heading not found')
                table_section = section.group(1).split(';Shop Level', 1)[1]
                table = re.search(r'\{\|[^\n]*\n(.*?)\|\}', table_section, re.S)
                if not table:
                    raise ValueError('Shop Level table not found: ' + section.group(1)[:1200])
                short['shop_table'] = table.group(1)
            else:
                short['fields'] = {key.strip(): value.strip() for key, value in re.findall(r'^\s*\|([^=\n]+)=(.*)$', text, re.M)
                                   if re.match(r'^BBS(?:world|loc)', key.strip())}
            snapshot['pages'].append(short)
        cache.parent.mkdir(parents=True, exist_ok=True)
        cache.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    output = {'format': 1, 'checked_at': snapshot['checked_at'],
              'scope': 'BBS character-specific world parameters only; no KH1/KH2/KH3 locations.',
              'world_japanese': WORLD_JP, 'enemies': {}}
    errors = []
    for page in snapshot['pages']:
        source = 'https://www.khwiki.com/' + urllib.parse.quote(page['title'].replace(' ', '_'))
        if page['title'] == 'Moogle Shop':
            table = page['shop_table']
            # Check the live table before emitting the reviewed row-span meaning.
            expected = ['Game start', 'Enchanted Dominion', 'Dwarf Woodlands', 'Castle of Dreams',
                        'Radiant Garden', 'Olympus Coliseum', 'Deep Space', 'Neverland']
            if not all(value in table for value in expected):
                raise ValueError('Shop Level source table changed; review before updating.')
            requirements = [r'\|1\|\|colspan="2"\|Game start',
                            r'\|2\|\|Complete one of the following Worlds',
                            r'\|3\|\|Complete two of the following Worlds',
                            r'\|4\|\|Complete all of the following Worlds',
                            r'\|5\|\|colspan="2"\|Complete \[\[Radiant Garden\]\]',
                            r'\|6\|\|Complete one of the following Worlds',
                            r'\|7\|\|Complete both of the following Worlds',
                            r'\|8\|\|colspan="2"\|Complete \[\[Neverland\]\]']
            if not all(re.search(pattern, table) for pattern in requirements):
                raise ValueError('Shop Level milestone rules changed; review the source table.')
            output['shop'] = {'source_url': source + '#Kingdom_Hearts_Birth_by_Sleep',
                              'revision': page['revision'], 'source_table': table.strip(),
                              'milestones': [
                                  {'level': 1, 'action': 'start', 'worlds': []},
                                  {'level': 2, 'action': 'complete_one', 'worlds': expected[1:4]},
                                  {'level': 3, 'action': 'complete_two', 'worlds': expected[1:4]},
                                  {'level': 4, 'action': 'complete_all', 'worlds': expected[1:4]},
                                  {'level': 5, 'action': 'complete_all', 'worlds': ['Radiant Garden']},
                                  {'level': 6, 'action': 'complete_one', 'worlds': ['Olympus Coliseum', 'Deep Space']},
                                  {'level': 7, 'action': 'complete_all', 'worlds': ['Olympus Coliseum', 'Deep Space']},
                                  {'level': 8, 'action': 'complete_all', 'worlds': ['Neverland']},
                              ]}
            continue
        fields = page['fields']
        worlds = {}
        for letter, role in ROLES.items():
            value = fields.get('BBSworld' + letter, '')
            selected = [wiki_text(world) for world in value.split(',') if world.strip()]
            if not selected:
                selected = list(dict.fromkeys(wiki_text(value) for key, value in fields.items()
                    if re.fullmatch(r'BBSloc\d+' + letter, key) and value.strip()))
            if selected:
                worlds[role] = selected
        if not worlds:
            errors.append(f'No character-specific BBS world fields for {page["title"]}: {fields}')
        unknown = {world for selected in worlds.values() for world in selected} - WORLD_JP.keys()
        if unknown:
            errors.append(f'Unreviewed BBS world labels in {page["title"]}: {unknown}')
        output['enemies'][page['title']] = {'source_url': source, 'revision': page['revision'],
            'revision_timestamp': page['timestamp'], 'worlds_by_character': worlds, 'source_fields': fields}
    if errors:
        raise ValueError('\n'.join(errors))
    assert set(output['enemies']) == set(enemies)
    path = BLOG / 'tools/drop-preview-worlds.json'
    if check_only:
        assert json.loads(path.read_text(encoding='utf-8')) == output, 'Saved world facts differ from their source cache'
    else:
        path.write_text(json.dumps(output, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    return {'enemy_count': len(enemies), 'world_count': len(WORLD_JP),
            'output': str(path), 'shop_revision': output['shop']['revision']}


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source-zip', type=Path, default=Path('D:/敌人掉落反向索引/khbbsfm-drop-database.zip'))
    parser.add_argument('--refresh', action='store_true', help='Fetch new wiki revisions instead of rebuilding from the dated fact cache.')
    parser.add_argument('--check', action='store_true', help='Validate the saved facts against the cache without writing files or using the network.')
    args = parser.parse_args()
    print(json.dumps(synchronize(args.source_zip.resolve(), args.refresh, args.check), ensure_ascii=False, indent=2))
