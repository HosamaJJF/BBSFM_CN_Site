---
title: 技能与魔法合成表(文本同步至1.0.3版补丁)
date: 2026-09-28 21:00:00
updated: 2026-10-05 00:00:00
categories:
  - 补丁发布
tags:
  - BBSFM
  - 合成表
  - 技能魔法
description: 攻击、魔法、其他指令的合成等级、成功率与能力对照表，以及无素材合成的能力出现概率。
---

感谢群友**透明人**整理搬运的技能合成表，本表会随着未来的补丁文本进行更新。

点击下方按钮可以快速跳转至对应板块。点击`对应合成行`列中的字母可以跳转查询能力表的对应位置。

<!-- more -->

<nav class="synthesis-nav" aria-label="合成表目录">
  <a href="#synthesis-mechanics">合成机制</a>
  <a href="#synthesis-attack">攻击</a>
  <a href="#synthesis-magic">魔法</a>
  <a href="#synthesis-other">其他</a>
  <a href="#synthesis-abilities">合成能力</a>
</nav>

<a href="/downloads/skill-magic-synthesis.xlsx" download data-no-instant>下载 Excel 合成表（含等级与成功率）</a>

<section class="synthesis-guide" id="synthesis-mechanics">
<h2>合成机制说明</h2>
<p>指令合成将两项符合配方的指令组合成新指令。多数素材指令需要练至最高等级，也有配方允许在较低等级时使用，以表中的 SLOT1、SLOT2 等级为准。「不限」表示该素材没有等级要求。移动与防御指令至少要持有两份，才能拿其中一份来合成。</p>
<p>配方道具用于在合成菜单中显示结果，没有取得配方也能进行符合组合的合成。表中的成功率指获得本行指令的概率；同一组合可能发生稀有突变，产出其他指令或射击锁定指令。部分概率会随角色或已获得的射击锁定指令变化，已在成功率栏分别标示。</p>
<p><strong>泰＝泰拉（Terra），维＝维恩图斯（Ventus），雅＝阿库娅（Aqua）</strong>；○ 表示该角色可使用该配方，× 表示不可。未单独注明角色的成功率适用于本行标为 ○ 的角色。SLOT1、SLOT2 等级分别对应两项素材，不是合成结果的等级。</p>
<p>加入合成素材（结晶）时，附加能力由结晶种类和配方的「对应合成行」共同决定，可点击字母查询下方能力表。射击锁定指令不能附带能力。不加入结晶时，新指令也有机会随机附带能力，概率由<strong>两项素材指令的当前等级总和</strong>决定：</p>
<div class="synthesis-table-wrap synthesis-table-wrap--chance" role="region" tabindex="0" aria-label="无合成素材时的能力出现概率">
<table class="synthesis-table synthesis-table--chance">
<caption>不加入合成素材时，随机附带能力的概率</caption>
<thead><tr class="synthesis-header-row"><th scope="col">两项指令等级总和</th><th scope="col">出现能力的概率</th></tr></thead>
<tbody>
<tr><th scope="row">4 或以下</th><td>10%</td></tr>
<tr><th scope="row">5</th><td>20%</td></tr>
<tr><th scope="row">6</th><td>30%</td></tr>
<tr><th scope="row">7</th><td>40%</td></tr>
<tr><th scope="row">8 或以上</th><td>50%</td></tr>
</tbody>
</table>
</div>
<p>例如两项素材均为 Lv.3，等级总和为 6，不加入结晶时有 30% 的概率附带能力。</p>
<p>等级、成功率和机制说明参考 <a href="https://www.khwiki.com/Command_Meld" target="_blank" rel="noopener noreferrer">KHWiki：Command Meld</a>。</p>
</section>

<section class="synthesis-section" id="synthesis-attack">
<h2>攻击</h2>
<div class="synthesis-table-wrap" role="region" tabindex="0" aria-label="攻击表格，可横向滚动">
<table class="synthesis-table synthesis-table--attack">
<caption>攻击（源工作表）</caption>
<tr class="synthesis-header-row">
<th rowspan="2" scope="col">名称</th>
<th colspan="2" scope="colgroup">SLOT1</th>
<th colspan="2" scope="colgroup">SLOT2</th>
<th rowspan="2" scope="col">对应合成行</th>
<th rowspan="2" scope="col" class="synthesis-rate">合成成功率</th>
<th rowspan="2" scope="col">泰</th>
<th rowspan="2" scope="col">维</th>
<th rowspan="2" scope="col">雅</th>
<th rowspan="2" scope="col" class="synthesis-note">备注</th>
</tr>
<tr class="synthesis-header-row">
<th scope="col">指令</th>
<th scope="col" class="synthesis-level">等级</th>
<th scope="col">指令</th>
<th scope="col" class="synthesis-level">等级</th>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">最终破击</span><span class="synthesis-name-ja" lang="ja">ファイナルブレイク</span><span class="synthesis-name-en" lang="en">Blitz</span></th>
<td rowspan="2"><span class="synthesis-name-cn">轮盘之刃</span><span class="synthesis-name-ja" lang="ja">スロットブレード</span><span class="synthesis-name-en" lang="en">Slot Edge</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">空中破击</span><span class="synthesis-name-ja" lang="ja">エリアルブレイク</span><span class="synthesis-name-en" lang="en">Quick Blitz</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-o" title="查看合成能力 O 行">O</a></td>
<td class="synthesis-rate">维：90%<br>泰、雅：100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">眩晕之刃</span><span class="synthesis-name-ja" lang="ja">スタンブレード</span><span class="synthesis-name-en" lang="en">Stun Edge</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">维、雅：90%<br>泰：100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">反射闪击</span><span class="synthesis-name-ja" lang="ja">リフレクブリッツ</span><span class="synthesis-name-en" lang="en">Barrier Surge</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">祈愿之刃</span><span class="synthesis-name-ja" lang="ja">ウィッシュブレード</span><span class="synthesis-name-en" lang="en">Wishing Edge</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-p" title="查看合成能力 P 行">P</a></td>
<td class="synthesis-rate">90%</td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">陨石爆发</span><span class="synthesis-name-ja" lang="ja">メテオバースト</span><span class="synthesis-name-en" lang="en">Meteor Crash</span></th>
<td><span class="synthesis-name-cn">火焰强击</span><span class="synthesis-name-ja" lang="ja">ファイアストライク</span><span class="synthesis-name-en" lang="en">Fire Strike</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">残暴冲击</span><span class="synthesis-name-ja" lang="ja">ブルータルブラスト</span><span class="synthesis-name-en" lang="en">Brutal Blast</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td><span class="synthesis-name-cn">最终破击</span><span class="synthesis-name-ja" lang="ja">ファイナルブレイク</span><span class="synthesis-name-en" lang="en">Blitz</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">地震</span><span class="synthesis-name-ja" lang="ja">クエイク</span><span class="synthesis-name-en" lang="en">Quake</span></td>
<td class="synthesis-level">5</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">魔法时刻</span><span class="synthesis-name-ja" lang="ja">マジックアワー</span><span class="synthesis-name-en" lang="en">Magic Hour</span></th>
<td><span class="synthesis-name-cn">最终破击</span><span class="synthesis-name-ja" lang="ja">ファイナルブレイク</span><span class="synthesis-name-en" lang="en">Blitz</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">大零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビガ</span><span class="synthesis-name-en" lang="en">Zero Graviga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-o" title="查看合成能力 O 行">O</a></td>
<td class="synthesis-rate">90%（未获得流星雨）<br>100%（已获得流星雨）</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td><span class="synthesis-name-cn">反射闪击</span><span class="synthesis-name-ja" lang="ja">リフレクブリッツ</span><span class="synthesis-name-en" lang="en">Barrier Surge</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">大劲风</span><span class="synthesis-name-ja" lang="ja">エアロガ</span><span class="synthesis-name-en" lang="en">Aeroga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">90%（未获得光束闪冲）<br>100%（已获得光束闪冲）</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">火焰冲刺</span><span class="synthesis-name-ja" lang="ja">ファイアダッシュ</span><span class="synthesis-name-en" lang="en">Fire Dash</span></th>
<td rowspan="2"><span class="synthesis-name-cn">滑行冲刺</span><span class="synthesis-name-ja" lang="ja">スライドダッシュ</span><span class="synthesis-name-en" lang="en">Sliding Dash</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">中火焰</span><span class="synthesis-name-ja" lang="ja">ファイラ</span><span class="synthesis-name-en" lang="en">Fira</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td rowspan="2"><span class="synthesis-name-cn">火焰</span><span class="synthesis-name-ja" lang="ja">ファイア</span><span class="synthesis-name-en" lang="en">Fire</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">混乱强击</span><span class="synthesis-name-ja" lang="ja">コンフュストライク</span><span class="synthesis-name-en" lang="en">Confusion Strike</span></td>
<td class="synthesis-level">2</td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">黑暗迷雾</span><span class="synthesis-name-ja" lang="ja">ダークヘイズ</span><span class="synthesis-name-en" lang="en">Dark Haze</span></th>
<td rowspan="2"><span class="synthesis-name-cn">火焰冲刺</span><span class="synthesis-name-ja" lang="ja">ファイアダッシュ</span><span class="synthesis-name-en" lang="en">Fire Dash</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビラ</span><span class="synthesis-name-en" lang="en">Zero Gravira</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">致盲</span><span class="synthesis-name-ja" lang="ja">ブラックアウト</span><span class="synthesis-name-en" lang="en">Blackout</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">火焰闪击</span><span class="synthesis-name-ja" lang="ja">ファイアブリッツ</span><span class="synthesis-name-en" lang="en">Fire Surge</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビデ</span><span class="synthesis-name-en" lang="en">Zero Gravity</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">音速猛攻</span><span class="synthesis-name-ja" lang="ja">ソニックレイヴ</span><span class="synthesis-name-en" lang="en">Sonic Blade</span></th>
<td><span class="synthesis-name-cn">火焰冲刺</span><span class="synthesis-name-ja" lang="ja">ファイアダッシュ</span><span class="synthesis-name-en" lang="en">Fire Dash</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">雷电闪击</span><span class="synthesis-name-ja" lang="ja">サンダーブリッツ</span><span class="synthesis-name-en" lang="en">Thunder Surge</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">90%（未获得光束闪冲）<br>100%（已获得光束闪冲）</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td rowspan="2"><span class="synthesis-name-cn">最终破击</span><span class="synthesis-name-ja" lang="ja">ファイナルブレイク</span><span class="synthesis-name-en" lang="en">Blitz</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">空中滑行</span><span class="synthesis-name-ja" lang="ja">エアスライド</span><span class="synthesis-name-en" lang="en">Air Slide</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">90%（未获得光束闪冲）<br>100%（已获得光束闪冲）</td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">黑暗迷雾</span><span class="synthesis-name-ja" lang="ja">ダークヘイズ</span><span class="synthesis-name-en" lang="en">Dark Haze</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">90%（未获得光束闪冲）<br>100%（已获得光束闪冲）</td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
</tr>
<tr>
<th scope="row"><span class="synthesis-name-cn">混沌猛攻</span><span class="synthesis-name-ja" lang="ja">カオスレイヴ</span><span class="synthesis-name-en" lang="en">Chaos Blade</span></th>
<td><span class="synthesis-name-cn">音速猛攻</span><span class="synthesis-name-ja" lang="ja">ソニックレイヴ</span><span class="synthesis-name-en" lang="en">Sonic Blade</span></td>
<td class="synthesis-level">5</td>
<td><span class="synthesis-name-cn">黑暗迷雾</span><span class="synthesis-name-ja" lang="ja">ダークヘイズ</span><span class="synthesis-name-en" lang="en">Dark Haze</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">80%</td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-note"></td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">斩铁剑</span><span class="synthesis-name-ja" lang="ja">ザンテツケン</span><span class="synthesis-name-en" lang="en">Zantetsuken</span></th>
<td rowspan="2"><span class="synthesis-name-cn">大停止</span><span class="synthesis-name-ja" lang="ja">ストプガ</span><span class="synthesis-name-en" lang="en">Stopga</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">黑暗迷雾</span><span class="synthesis-name-ja" lang="ja">ダークヘイズ</span><span class="synthesis-name-en" lang="en">Dark Haze</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">80%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">音速猛攻</span><span class="synthesis-name-ja" lang="ja">ソニックレイヴ</span><span class="synthesis-name-en" lang="en">Sonic Blade</span></td>
<td class="synthesis-level">5</td>
<td><a href="#ability-row-f" title="查看合成能力 F 行">F</a></td>
<td class="synthesis-rate">80%</td>
</tr>
<tr>
<th scope="row"><span class="synthesis-name-cn">强击飞掷</span><span class="synthesis-name-ja" lang="ja">ストライクレイド</span><span class="synthesis-name-en" lang="en">Strike Raid</span></th>
<td><span class="synthesis-name-cn">空中破击</span><span class="synthesis-name-ja" lang="ja">エリアルブレイク</span><span class="synthesis-name-en" lang="en">Quick Blitz</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">滑行冲刺</span><span class="synthesis-name-ja" lang="ja">スライドダッシュ</span><span class="synthesis-name-en" lang="en">Sliding Dash</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-o" title="查看合成能力 O 行">O</a></td>
<td class="synthesis-rate">100%</td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-note"></td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">冰冻飞掷</span><span class="synthesis-name-ja" lang="ja">フリーズレイド</span><span class="synthesis-name-en" lang="en">Freeze Raid</span></th>
<td><span class="synthesis-name-cn">强击飞掷</span><span class="synthesis-name-ja" lang="ja">ストライクレイド</span><span class="synthesis-name-en" lang="en">Strike Raid</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザラ</span><span class="synthesis-name-en" lang="en">Blizzara</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td><span class="synthesis-name-cn">冰雪之刃</span><span class="synthesis-name-ja" lang="ja">ブリザドブレード</span><span class="synthesis-name-en" lang="en">Blizzard Edge</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">束缚强击</span><span class="synthesis-name-ja" lang="ja">バインドストライク</span><span class="synthesis-name-en" lang="en">Binding Strike</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">宝藏飞掷</span><span class="synthesis-name-ja" lang="ja">トレジャーレイド</span><span class="synthesis-name-en" lang="en">Treasure Raid</span></th>
<td rowspan="2"><span class="synthesis-name-cn">轮盘之刃</span><span class="synthesis-name-ja" lang="ja">スロットブレード</span><span class="synthesis-name-en" lang="en">Slot Edge</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中磁力</span><span class="synthesis-name-ja" lang="ja">マグネラ</span><span class="synthesis-name-en" lang="en">Magnera</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">强击飞掷</span><span class="synthesis-name-ja" lang="ja">ストライクレイド</span><span class="synthesis-name-en" lang="en">Strike Raid</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-o" title="查看合成能力 O 行">O</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="4" scope="row"><span class="synthesis-name-cn">星火飞掷</span><span class="synthesis-name-ja" lang="ja">スパークレイド</span><span class="synthesis-name-en" lang="en">Spark Raid</span></th>
<td rowspan="2"><span class="synthesis-name-cn">大磁力</span><span class="synthesis-name-ja" lang="ja">マグネガ</span><span class="synthesis-name-en" lang="en">Magnega</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">冰冻飞掷</span><span class="synthesis-name-ja" lang="ja">フリーズレイド</span><span class="synthesis-name-en" lang="en">Freeze Raid</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-j" title="查看合成能力 J 行">J</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="4" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">宝藏飞掷</span><span class="synthesis-name-ja" lang="ja">トレジャーレイド</span><span class="synthesis-name-en" lang="en">Treasure Raid</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td rowspan="2"><span class="synthesis-name-cn">闪避翻滚</span><span class="synthesis-name-ja" lang="ja">ドッジロール</span><span class="synthesis-name-en" lang="en">Dodge Roll</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">雷电闪击</span><span class="synthesis-name-ja" lang="ja">サンダーブリッツ</span><span class="synthesis-name-en" lang="en">Thunder Surge</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-p" title="查看合成能力 P 行">P</a></td>
<td class="synthesis-rate">80%</td>
<td rowspan="2" class="synthesis-note">稀有突变</td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">大雷电</span><span class="synthesis-name-ja" lang="ja">サンダガ</span><span class="synthesis-name-en" lang="en">Thundaga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-l" title="查看合成能力 L 行">L</a></td>
<td class="synthesis-rate">20%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">疾风飞掷</span><span class="synthesis-name-ja" lang="ja">ウインドレイド</span><span class="synthesis-name-en" lang="en">Wind Raid</span></th>
<td rowspan="2"><span class="synthesis-name-cn">大劲风</span><span class="synthesis-name-ja" lang="ja">エアロガ</span><span class="synthesis-name-en" lang="en">Aeroga</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">冰冻飞掷</span><span class="synthesis-name-ja" lang="ja">フリーズレイド</span><span class="synthesis-name-en" lang="en">Freeze Raid</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">宝藏飞掷</span><span class="synthesis-name-ja" lang="ja">トレジャーレイド</span><span class="synthesis-name-en" lang="en">Treasure Raid</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-f" title="查看合成能力 F 行">F</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="4" scope="row"><span class="synthesis-name-cn">火焰闪击</span><span class="synthesis-name-ja" lang="ja">ファイアブリッツ</span><span class="synthesis-name-en" lang="en">Fire Surge</span></th>
<td><span class="synthesis-name-cn">火焰冲刺</span><span class="synthesis-name-ja" lang="ja">ファイアダッシュ</span><span class="synthesis-name-en" lang="en">Fire Dash</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">点燃</span><span class="synthesis-name-ja" lang="ja">スナイプバーニング</span><span class="synthesis-name-en" lang="en">Ignite</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-note"></td>
</tr>
<tr>
<td rowspan="3"><span class="synthesis-name-cn">中火焰</span><span class="synthesis-name-ja" lang="ja">ファイラ</span><span class="synthesis-name-en" lang="en">Fira</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">火焰强击</span><span class="synthesis-name-ja" lang="ja">ファイアストライク</span><span class="synthesis-name-en" lang="en">Fire Strike</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">混乱强击</span><span class="synthesis-name-ja" lang="ja">コンフュストライク</span><span class="synthesis-name-en" lang="en">Confusion Strike</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-o" title="查看合成能力 O 行">O</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">束缚强击</span><span class="synthesis-name-ja" lang="ja">バインドストライク</span><span class="synthesis-name-en" lang="en">Binding Strike</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">反射闪击</span><span class="synthesis-name-ja" lang="ja">リフレクブリッツ</span><span class="synthesis-name-en" lang="en">Barrier Surge</span></th>
<td rowspan="2"><span class="synthesis-name-cn">反射</span><span class="synthesis-name-ja" lang="ja">リフレク</span><span class="synthesis-name-en" lang="en">Barrier</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">火焰冲刺</span><span class="synthesis-name-ja" lang="ja">ファイアダッシュ</span><span class="synthesis-name-en" lang="en">Fire Dash</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">眩晕之刃</span><span class="synthesis-name-ja" lang="ja">スタンブレード</span><span class="synthesis-name-en" lang="en">Stun Edge</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="4" scope="row"><span class="synthesis-name-cn">雷电闪击</span><span class="synthesis-name-ja" lang="ja">サンダーブリッツ</span><span class="synthesis-name-en" lang="en">Thunder Surge</span></th>
<td rowspan="4"><span class="synthesis-name-cn">中雷电</span><span class="synthesis-name-ja" lang="ja">サンダラ</span><span class="synthesis-name-en" lang="en">Thundara</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">混乱强击</span><span class="synthesis-name-ja" lang="ja">コンフュストライク</span><span class="synthesis-name-en" lang="en">Confusion Strike</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">泰：95%<br>维、雅：100%</td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">火焰冲刺</span><span class="synthesis-name-ja" lang="ja">ファイアダッシュ</span><span class="synthesis-name-en" lang="en">Fire Dash</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">冰冻飞掷</span><span class="synthesis-name-ja" lang="ja">フリーズレイド</span><span class="synthesis-name-en" lang="en">Freeze Raid</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-g" title="查看合成能力 G 行">G</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">眩晕之刃</span><span class="synthesis-name-ja" lang="ja">スタンブレード</span><span class="synthesis-name-en" lang="en">Stun Edge</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">空中猛击</span><span class="synthesis-name-ja" lang="ja">エリアルスラム</span><span class="synthesis-name-en" lang="en">Aerial Slam</span></th>
<td><span class="synthesis-name-cn">火焰强击</span><span class="synthesis-name-ja" lang="ja">ファイアストライク</span><span class="synthesis-name-en" lang="en">Fire Strike</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中劲风</span><span class="synthesis-name-ja" lang="ja">エアロラ</span><span class="synthesis-name-en" lang="en">Aerora</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">维：90%<br>泰、雅：100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td><span class="synthesis-name-cn">火焰闪击</span><span class="synthesis-name-ja" lang="ja">ファイアブリッツ</span><span class="synthesis-name-en" lang="en">Fire Surge</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">劲风</span><span class="synthesis-name-ja" lang="ja">エアロ</span><span class="synthesis-name-en" lang="en">Aero</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">火焰冲刺</span><span class="synthesis-name-ja" lang="ja">ファイアダッシュ</span><span class="synthesis-name-en" lang="en">Fire Dash</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">高跳</span><span class="synthesis-name-ja" lang="ja">ハイジャンプ</span><span class="synthesis-name-en" lang="en">High Jump</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="6" scope="row"><span class="synthesis-name-cn">孤高奥义</span><span class="synthesis-name-ja" lang="ja">ソロアルカナム</span><span class="synthesis-name-en" lang="en">Ars Solum</span></th>
<td rowspan="2"><span class="synthesis-name-cn">黑暗迷雾</span><span class="synthesis-name-ja" lang="ja">ダークヘイズ</span><span class="synthesis-name-en" lang="en">Dark Haze</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">音速猛攻</span><span class="synthesis-name-ja" lang="ja">ソニックレイヴ</span><span class="synthesis-name-en" lang="en">Sonic Blade</span></td>
<td class="synthesis-level">5</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">20%</td>
<td rowspan="6" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="6" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="6" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="6" class="synthesis-note">稀有突变</td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td rowspan="2"><span class="synthesis-name-cn">大停止</span><span class="synthesis-name-ja" lang="ja">ストプガ</span><span class="synthesis-name-en" lang="en">Stopga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">20%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">音速猛攻</span><span class="synthesis-name-ja" lang="ja">ソニックレイヴ</span><span class="synthesis-name-en" lang="en">Sonic Blade</span></td>
<td class="synthesis-level">5</td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">20%</td>
</tr>
<tr>
<td rowspan="2"><span class="synthesis-name-cn">中雷电</span><span class="synthesis-name-ja" lang="ja">サンダラ</span><span class="synthesis-name-en" lang="en">Thundara</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">强击飞掷</span><span class="synthesis-name-ja" lang="ja">ストライクレイド</span><span class="synthesis-name-en" lang="en">Strike Raid</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-f" title="查看合成能力 F 行">F</a></td>
<td class="synthesis-rate">5%</td>
</tr>
<tr>
<td class="synthesis-level">未确认</td>
<td><span class="synthesis-name-cn">眩晕之刃</span><span class="synthesis-name-ja" lang="ja">スタンブレード</span><span class="synthesis-name-en" lang="en">Stun Edge</span></td>
<td class="synthesis-level">未确认</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">未确认<br><small>Wiki 未收录此配方</small></td>
</tr>
<tr>
<td><span class="synthesis-name-cn">滑行冲刺</span><span class="synthesis-name-ja" lang="ja">スライドダッシュ</span><span class="synthesis-name-en" lang="en">Sliding Dash</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">雷电</span><span class="synthesis-name-ja" lang="ja">サンダー</span><span class="synthesis-name-en" lang="en">Thunder</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">5%</td>
</tr>
<tr>
<th rowspan="6" scope="row"><span class="synthesis-name-cn">最终奥义</span><span class="synthesis-name-ja" lang="ja">ラストアルカナム</span><span class="synthesis-name-en" lang="en">Ars Arcanum</span></th>
<td><span class="synthesis-name-cn">最终破击</span><span class="synthesis-name-ja" lang="ja">ファイナルブレイク</span><span class="synthesis-name-en" lang="en">Blitz</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">空中猛击</span><span class="synthesis-name-ja" lang="ja">エリアルスラム</span><span class="synthesis-name-en" lang="en">Aerial Slam</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-f" title="查看合成能力 F 行">F</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="6" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="6" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="6" class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-note"></td>
</tr>
<tr>
<td rowspan="2"><span class="synthesis-name-cn">空中破击</span><span class="synthesis-name-ja" lang="ja">エリアルブレイク</span><span class="synthesis-name-en" lang="en">Quick Blitz</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">轮盘之刃</span><span class="synthesis-name-ja" lang="ja">スロットブレード</span><span class="synthesis-name-en" lang="en">Slot Edge</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-o" title="查看合成能力 O 行">O</a></td>
<td class="synthesis-rate">10%</td>
<td rowspan="5" class="synthesis-note">稀有突变</td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td rowspan="2"><span class="synthesis-name-cn">冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザド</span><span class="synthesis-name-en" lang="en">Blizzard</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-g" title="查看合成能力 G 行">G</a></td>
<td class="synthesis-rate">5%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">滑行冲刺</span><span class="synthesis-name-ja" lang="ja">スライドダッシュ</span><span class="synthesis-name-en" lang="en">Sliding Dash</span></td>
<td class="synthesis-level">2</td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-e" title="查看合成能力 E 行">E</a></td>
<td class="synthesis-rate">5%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">火焰强击</span><span class="synthesis-name-ja" lang="ja">ファイアストライク</span><span class="synthesis-name-en" lang="en">Fire Strike</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中劲风</span><span class="synthesis-name-ja" lang="ja">エアロラ</span><span class="synthesis-name-en" lang="en">Aerora</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">10%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">冰雪之刃</span><span class="synthesis-name-ja" lang="ja">ブリザドブレード</span><span class="synthesis-name-en" lang="en">Blizzard Edge</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">中恢复</span><span class="synthesis-name-ja" lang="ja">ケアルラ</span><span class="synthesis-name-en" lang="en">Cura</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-g" title="查看合成能力 G 行">G</a></td>
<td class="synthesis-rate">5%</td>
</tr>
<tr>
<th rowspan="4" scope="row"><span class="synthesis-name-cn">时间剪接</span><span class="synthesis-name-ja" lang="ja">タイムスプライサー</span><span class="synthesis-name-en" lang="en">Time Splicer</span></th>
<td rowspan="2"><span class="synthesis-name-cn">大停止</span><span class="synthesis-name-ja" lang="ja">ストプガ</span><span class="synthesis-name-en" lang="en">Stopga</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">空中猛击</span><span class="synthesis-name-ja" lang="ja">エリアルスラム</span><span class="synthesis-name-en" lang="en">Aerial Slam</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-f" title="查看合成能力 F 行">F</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="4" class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">反射</span><span class="synthesis-name-ja" lang="ja">リフレク</span><span class="synthesis-name-en" lang="en">Barrier</span></td>
<td class="synthesis-level">1</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">20%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-note">稀有突变</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">反射闪击</span><span class="synthesis-name-ja" lang="ja">リフレクブリッツ</span><span class="synthesis-name-en" lang="en">Barrier Surge</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">祈愿之刃</span><span class="synthesis-name-ja" lang="ja">ウィッシュブレード</span><span class="synthesis-name-en" lang="en">Wishing Edge</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-p" title="查看合成能力 P 行">P</a></td>
<td class="synthesis-rate">10%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">眩晕之刃</span><span class="synthesis-name-ja" lang="ja">スタンブレード</span><span class="synthesis-name-en" lang="en">Stun Edge</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">轮盘之刃</span><span class="synthesis-name-ja" lang="ja">スロットブレード</span><span class="synthesis-name-en" lang="en">Slot Edge</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">10%</td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">剧毒之刃</span><span class="synthesis-name-ja" lang="ja">ポイズンブレード</span><span class="synthesis-name-en" lang="en">Poison Edge</span></th>
<td rowspan="3"><span class="synthesis-name-cn">剧毒</span><span class="synthesis-name-ja" lang="ja">ポイズン</span><span class="synthesis-name-en" lang="en">Poison</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">空中破击</span><span class="synthesis-name-ja" lang="ja">エリアルブレイク</span><span class="synthesis-name-en" lang="en">Quick Blitz</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-o" title="查看合成能力 O 行">O</a></td>
<td class="synthesis-rate">95%（未获得生化齐射）<br>100%（已获得生化齐射）</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">滑行冲刺</span><span class="synthesis-name-ja" lang="ja">スライドダッシュ</span><span class="synthesis-name-en" lang="en">Sliding Dash</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">95%（未获得生化齐射）<br>100%（已获得生化齐射）</td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">强击飞掷</span><span class="synthesis-name-ja" lang="ja">ストライクレイド</span><span class="synthesis-name-en" lang="en">Strike Raid</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">95%（未获得生化齐射）<br>100%（已获得生化齐射）</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">祈愿之刃</span><span class="synthesis-name-ja" lang="ja">ウィッシュブレード</span><span class="synthesis-name-en" lang="en">Wishing Edge</span></th>
<td rowspan="2"><span class="synthesis-name-cn">反射闪击</span><span class="synthesis-name-ja" lang="ja">リフレクブリッツ</span><span class="synthesis-name-en" lang="en">Barrier Surge</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">强击飞掷</span><span class="synthesis-name-ja" lang="ja">ストライクレイド</span><span class="synthesis-name-en" lang="en">Strike Raid</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-o" title="查看合成能力 O 行">O</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td rowspan="2"><span class="synthesis-name-cn">眩晕之刃</span><span class="synthesis-name-ja" lang="ja">スタンブレード</span><span class="synthesis-name-en" lang="en">Stun Edge</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">束缚强击</span><span class="synthesis-name-ja" lang="ja">バインドストライク</span><span class="synthesis-name-en" lang="en">Binding Strike</span></td>
<td class="synthesis-level">2</td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-j" title="查看合成能力 J 行">J</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">冰雪之刃</span><span class="synthesis-name-ja" lang="ja">ブリザドブレード</span><span class="synthesis-name-en" lang="en">Blizzard Edge</span></th>
<td rowspan="2"><span class="synthesis-name-cn">冰雪or中冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザドorブリザラ</span><span class="synthesis-name-en" lang="en">Blizzard or Blizzara</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">空中破击</span><span class="synthesis-name-ja" lang="ja">エリアルブレイク</span><span class="synthesis-name-en" lang="en">Quick Blitz</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-g" title="查看合成能力 G 行">G</a></td>
<td class="synthesis-rate">维：95%<br>泰、雅：100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">滑行冲刺</span><span class="synthesis-name-ja" lang="ja">スライドダッシュ</span><span class="synthesis-name-en" lang="en">Sliding Dash</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-e" title="查看合成能力 E 行">E</a></td>
<td class="synthesis-rate">维：95%<br>泰、雅：100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">眩晕之刃</span><span class="synthesis-name-ja" lang="ja">スタンブレード</span><span class="synthesis-name-en" lang="en">Stun Edge</span></th>
<td rowspan="2"><span class="synthesis-name-cn">雷电</span><span class="synthesis-name-ja" lang="ja">サンダー</span><span class="synthesis-name-en" lang="en">Thunder</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">滑行冲刺</span><span class="synthesis-name-ja" lang="ja">スライドダッシュ</span><span class="synthesis-name-en" lang="en">Sliding Dash</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">泰：95%<br>维、雅：100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td rowspan="2"><span class="synthesis-name-cn">强击飞掷</span><span class="synthesis-name-ja" lang="ja">ストライクレイド</span><span class="synthesis-name-en" lang="en">Strike Raid</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-l" title="查看合成能力 L 行">L</a></td>
<td class="synthesis-rate">泰：95%<br>维、雅：100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">中雷电</span><span class="synthesis-name-ja" lang="ja">サンダラ</span><span class="synthesis-name-en" lang="en">Thundara</span></td>
<td class="synthesis-level">3</td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">泰：95%<br>维、雅：100%</td>
</tr>
<tr>
<th rowspan="7" scope="row"><span class="synthesis-name-cn">轮盘之刃</span><span class="synthesis-name-ja" lang="ja">スロットブレード</span><span class="synthesis-name-en" lang="en">Slot Edge</span></th>
<td rowspan="2"><span class="synthesis-name-cn">中恢复</span><span class="synthesis-name-ja" lang="ja">ケアルラ</span><span class="synthesis-name-en" lang="en">Cura</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">剧毒之刃</span><span class="synthesis-name-ja" lang="ja">ポイズンブレード</span><span class="synthesis-name-en" lang="en">Poison Edge</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-p" title="查看合成能力 P 行">P</a></td>
<td class="synthesis-rate">维：95%<br>泰、雅：100%</td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="7" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">冰雪之刃</span><span class="synthesis-name-ja" lang="ja">ブリザドブレード</span><span class="synthesis-name-en" lang="en">Blizzard Edge</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-g" title="查看合成能力 G 行">G</a></td>
<td class="synthesis-rate">维：95%<br>泰、雅：100%</td>
</tr>
<tr>
<td rowspan="4"><span class="synthesis-name-cn">大恢复</span><span class="synthesis-name-ja" lang="ja">ケアルガ</span><span class="synthesis-name-en" lang="en">Curaga</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">恢复格挡</span><span class="synthesis-name-ja" lang="ja">レストアガード</span><span class="synthesis-name-en" lang="en">Renewal Block</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">90%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">充能格挡</span><span class="synthesis-name-ja" lang="ja">チャージガード</span><span class="synthesis-name-en" lang="en">Focus Block</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-p" title="查看合成能力 P 行">P</a></td>
<td class="synthesis-rate">90%</td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">恢复屏障</span><span class="synthesis-name-ja" lang="ja">レストアバリア</span><span class="synthesis-name-en" lang="en">Renewal Barrier</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">90%</td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">充能屏障</span><span class="synthesis-name-ja" lang="ja">チャージバリア</span><span class="synthesis-name-en" lang="en">Focus Barrier</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-p" title="查看合成能力 P 行">P</a></td>
<td class="synthesis-rate">90%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">恢复</span><span class="synthesis-name-ja" lang="ja">ケアル</span><span class="synthesis-name-en" lang="en">Cure</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">祈愿之刃</span><span class="synthesis-name-ja" lang="ja">ウィッシュブレード</span><span class="synthesis-name-en" lang="en">Wishing Edge</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-o" title="查看合成能力 O 行">O</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">火焰强击</span><span class="synthesis-name-ja" lang="ja">ファイアストライク</span><span class="synthesis-name-en" lang="en">Fire Strike</span></th>
<td><span class="synthesis-name-cn">眩晕之刃</span><span class="synthesis-name-ja" lang="ja">スタンブレード</span><span class="synthesis-name-en" lang="en">Stun Edge</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">火焰</span><span class="synthesis-name-ja" lang="ja">ファイア</span><span class="synthesis-name-en" lang="en">Fire</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td><span class="synthesis-name-cn">剧毒之刃</span><span class="synthesis-name-ja" lang="ja">ポイズンブレード</span><span class="synthesis-name-en" lang="en">Poison Edge</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">中火焰</span><span class="synthesis-name-ja" lang="ja">ファイラ</span><span class="synthesis-name-en" lang="en">Fira</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">祈愿之刃</span><span class="synthesis-name-ja" lang="ja">ウィッシュブレード</span><span class="synthesis-name-en" lang="en">Wishing Edge</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">点燃</span><span class="synthesis-name-ja" lang="ja">スナイプバーニング</span><span class="synthesis-name-en" lang="en">Ignite</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">100%</td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">混乱强击</span><span class="synthesis-name-ja" lang="ja">コンフュストライク</span><span class="synthesis-name-en" lang="en">Confusion Strike</span></th>
<td rowspan="2"><span class="synthesis-name-cn">混乱</span><span class="synthesis-name-ja" lang="ja">コンフュ</span><span class="synthesis-name-en" lang="en">Confuse</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">空中破击</span><span class="synthesis-name-ja" lang="ja">エリアルブレイク</span><span class="synthesis-name-en" lang="en">Quick Blitz</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-o" title="查看合成能力 O 行">O</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">强击飞掷</span><span class="synthesis-name-ja" lang="ja">ストライクレイド</span><span class="synthesis-name-en" lang="en">Strike Raid</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-g" title="查看合成能力 G 行">G</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">滑行冲刺</span><span class="synthesis-name-ja" lang="ja">スライドダッシュ</span><span class="synthesis-name-en" lang="en">Sliding Dash</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビデ</span><span class="synthesis-name-en" lang="en">Zero Gravity</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">束缚强击</span><span class="synthesis-name-ja" lang="ja">バインドストライク</span><span class="synthesis-name-en" lang="en">Binding Strike</span></th>
<td rowspan="2"><span class="synthesis-name-cn">束缚</span><span class="synthesis-name-ja" lang="ja">バインド</span><span class="synthesis-name-en" lang="en">Bind</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">空中破击</span><span class="synthesis-name-ja" lang="ja">エリアルブレイク</span><span class="synthesis-name-en" lang="en">Quick Blitz</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">强击飞掷</span><span class="synthesis-name-ja" lang="ja">ストライクレイド</span><span class="synthesis-name-en" lang="en">Strike Raid</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-o" title="查看合成能力 O 行">O</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">眩晕之刃</span><span class="synthesis-name-ja" lang="ja">スタンブレード</span><span class="synthesis-name-en" lang="en">Stun Edge</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビデ</span><span class="synthesis-name-en" lang="en">Zero Gravity</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">龙卷强击</span><span class="synthesis-name-ja" lang="ja">トルネドストライク</span><span class="synthesis-name-en" lang="en">Tornado Strike</span></th>
<td rowspan="2"><span class="synthesis-name-cn">大劲风</span><span class="synthesis-name-ja" lang="ja">エアロガ</span><span class="synthesis-name-en" lang="en">Aeroga</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">混乱强击</span><span class="synthesis-name-ja" lang="ja">コンフュストライク</span><span class="synthesis-name-en" lang="en">Confusion Strike</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-g" title="查看合成能力 G 行">G</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">束缚强击</span><span class="synthesis-name-ja" lang="ja">バインドストライク</span><span class="synthesis-name-en" lang="en">Binding Strike</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-f" title="查看合成能力 F 行">F</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">残暴冲击</span><span class="synthesis-name-ja" lang="ja">ブルータルブラスト</span><span class="synthesis-name-en" lang="en">Brutal Blast</span></th>
<td><span class="synthesis-name-cn">束缚强击</span><span class="synthesis-name-ja" lang="ja">バインドストライク</span><span class="synthesis-name-en" lang="en">Binding Strike</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">爆破方阵</span><span class="synthesis-name-ja" lang="ja">デトネスクウェア</span><span class="synthesis-name-en" lang="en">Mine Square</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-l" title="查看合成能力 L 行">L</a></td>
<td class="synthesis-rate">70%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td><span class="synthesis-name-cn">眩晕之刃</span><span class="synthesis-name-ja" lang="ja">スタンブレード</span><span class="synthesis-name-en" lang="en">Stun Edge</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">爆破护盾</span><span class="synthesis-name-ja" lang="ja">デトネシールド</span><span class="synthesis-name-en" lang="en">Mine Shield</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-o" title="查看合成能力 O 行">O</a></td>
<td class="synthesis-rate">70%</td>
</tr>
<tr>
<th rowspan="4" scope="row"><span class="synthesis-name-cn">磁力螺旋</span><span class="synthesis-name-ja" lang="ja">マグネスパイラル</span><span class="synthesis-name-en" lang="en">Magnet Spiral</span></th>
<td rowspan="2"><span class="synthesis-name-cn">束缚强击</span><span class="synthesis-name-ja" lang="ja">バインドストライク</span><span class="synthesis-name-en" lang="en">Binding Strike</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">磁力粉碎</span><span class="synthesis-name-ja" lang="ja">マグネクラッシュ</span><span class="synthesis-name-en" lang="en">Collision Magnet</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">大磁力</span><span class="synthesis-name-ja" lang="ja">マグネガ</span><span class="synthesis-name-en" lang="en">Magnega</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-j" title="查看合成能力 J 行">J</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">空中破击</span><span class="synthesis-name-ja" lang="ja">エリアルブレイク</span><span class="synthesis-name-en" lang="en">Quick Blitz</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中磁力</span><span class="synthesis-name-ja" lang="ja">マグネラ</span><span class="synthesis-name-en" lang="en">Magnera</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">20%</td>
<td rowspan="2" class="synthesis-note">稀有突变</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">中零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビラ</span><span class="synthesis-name-en" lang="en">Zero Gravira</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">磁力</span><span class="synthesis-name-ja" lang="ja">マグネ</span><span class="synthesis-name-en" lang="en">Magnet</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">20%</td>
</tr>
<tr>
<th scope="row"><span class="synthesis-name-cn">疾风斩</span><span class="synthesis-name-ja" lang="ja">ウインドカッター</span><span class="synthesis-name-en" lang="en">Windcutter</span></th>
<td><span class="synthesis-name-cn">混乱强击</span><span class="synthesis-name-ja" lang="ja">コンフュストライク</span><span class="synthesis-name-en" lang="en">Confusion Strike</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">大劲风</span><span class="synthesis-name-ja" lang="ja">エアロガ</span><span class="synthesis-name-en" lang="en">Aeroga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-g" title="查看合成能力 G 行">G</a></td>
<td class="synthesis-rate">100%</td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-note"></td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">极限风暴</span><span class="synthesis-name-ja" lang="ja">リミットストーム</span><span class="synthesis-name-en" lang="en">Limit Storm</span></th>
<td rowspan="2"><span class="synthesis-name-cn">残暴冲击</span><span class="synthesis-name-ja" lang="ja">ブルータルブラスト</span><span class="synthesis-name-en" lang="en">Brutal Blast</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">混乱强击</span><span class="synthesis-name-ja" lang="ja">コンフュストライク</span><span class="synthesis-name-en" lang="en">Confusion Strike</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-g" title="查看合成能力 G 行">G</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">束缚强击</span><span class="synthesis-name-ja" lang="ja">バインドストライク</span><span class="synthesis-name-en" lang="en">Binding Strike</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th scope="row"><span class="synthesis-name-cn">神圣升腾</span><span class="synthesis-name-ja" lang="ja">ホーリーライズ</span><span class="synthesis-name-en" lang="en">Salvation</span></th>
<td><span class="synthesis-name-cn">疾风飞掷</span><span class="synthesis-name-ja" lang="ja">ウインドレイド</span><span class="synthesis-name-en" lang="en">Wind Raid</span></td>
<td class="synthesis-level">5</td>
<td><span class="synthesis-name-cn">大恢复</span><span class="synthesis-name-ja" lang="ja">ケアルガ</span><span class="synthesis-name-en" lang="en">Curaga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">100%</td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-note"></td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">磁力粉碎</span><span class="synthesis-name-ja" lang="ja">マグネクラッシュ</span><span class="synthesis-name-en" lang="en">Collision Magnet</span></th>
<td rowspan="2"><span class="synthesis-name-cn">中磁力</span><span class="synthesis-name-ja" lang="ja">マグネラ</span><span class="synthesis-name-en" lang="en">Magnera</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">空中破击</span><span class="synthesis-name-ja" lang="ja">エリアルブレイク</span><span class="synthesis-name-en" lang="en">Quick Blitz</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">80%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">眩晕之刃</span><span class="synthesis-name-ja" lang="ja">スタンブレード</span><span class="synthesis-name-en" lang="en">Stun Edge</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-l" title="查看合成能力 L 行">L</a></td>
<td class="synthesis-rate">80%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">中零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビラ</span><span class="synthesis-name-en" lang="en">Zero Gravira</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">磁力</span><span class="synthesis-name-ja" lang="ja">マグネ</span><span class="synthesis-name-en" lang="en">Magnet</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">80%</td>
</tr>
<tr>
<th scope="row"><span class="synthesis-name-cn">大地破击</span><span class="synthesis-name-ja" lang="ja">ガイアブレイク</span><span class="synthesis-name-en" lang="en">Geo Impact</span></th>
<td><span class="synthesis-name-cn">残暴冲击</span><span class="synthesis-name-ja" lang="ja">ブルータルブラスト</span><span class="synthesis-name-en" lang="en">Brutal Blast</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">残暴冲击</span><span class="synthesis-name-ja" lang="ja">ブルータルブラスト</span><span class="synthesis-name-en" lang="en">Brutal Blast</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">70%</td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-note"></td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">灵魂释放</span><span class="synthesis-name-ja" lang="ja">ソウルリリース</span><span class="synthesis-name-en" lang="en">Sacrifice</span></th>
<td rowspan="2"><span class="synthesis-name-cn">驱逐</span><span class="synthesis-name-ja" lang="ja">デジョン</span><span class="synthesis-name-en" lang="en">Warp</span></td>
<td class="synthesis-level">5</td>
<td><span class="synthesis-name-cn">黑暗迷雾</span><span class="synthesis-name-ja" lang="ja">ダークヘイズ</span><span class="synthesis-name-en" lang="en">Dark Haze</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">5</td>
<td><span class="synthesis-name-cn">剧毒之刃</span><span class="synthesis-name-ja" lang="ja">ポイズンブレード</span><span class="synthesis-name-en" lang="en">Poison Edge</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="4" scope="row"><span class="synthesis-name-cn">休息时间</span><span class="synthesis-name-ja" lang="ja">ブレイクタイム</span><span class="synthesis-name-en" lang="en">Break Time</span></th>
<td rowspan="4"><span class="synthesis-name-cn">大恢复</span><span class="synthesis-name-ja" lang="ja">ケアルガ</span><span class="synthesis-name-en" lang="en">Curaga</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">恢复格挡</span><span class="synthesis-name-ja" lang="ja">レストアガード</span><span class="synthesis-name-en" lang="en">Renewal Block</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">10%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="4" class="synthesis-note">稀有突变</td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">充能格挡</span><span class="synthesis-name-ja" lang="ja">チャージガード</span><span class="synthesis-name-en" lang="en">Focus Block</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-p" title="查看合成能力 P 行">P</a></td>
<td class="synthesis-rate">10%</td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">恢复屏障</span><span class="synthesis-name-ja" lang="ja">レストアバリア</span><span class="synthesis-name-en" lang="en">Renewal Barrier</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">10%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">充能屏障</span><span class="synthesis-name-ja" lang="ja">チャージバリア</span><span class="synthesis-name-en" lang="en">Focus Barrier</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-p" title="查看合成能力 P 行">P</a></td>
<td class="synthesis-rate">10%</td>
</tr>
</table>
</div>
</section>

<section class="synthesis-section" id="synthesis-magic">
<h2>魔法</h2>
<div class="synthesis-table-wrap" role="region" tabindex="0" aria-label="魔法表格，可横向滚动">
<table class="synthesis-table synthesis-table--magic">
<caption>魔法（源工作表）</caption>
<tr class="synthesis-header-row">
<th rowspan="2" scope="col">名称</th>
<th colspan="2" scope="colgroup">SLOT1</th>
<th colspan="2" scope="colgroup">SLOT2</th>
<th rowspan="2" scope="col">对应合成行</th>
<th rowspan="2" scope="col" class="synthesis-rate">合成成功率</th>
<th rowspan="2" scope="col">泰</th>
<th rowspan="2" scope="col">维</th>
<th rowspan="2" scope="col">雅</th>
<th rowspan="2" scope="col" class="synthesis-note">备注</th>
</tr>
<tr class="synthesis-header-row">
<th scope="col">指令</th>
<th scope="col" class="synthesis-level">等级</th>
<th scope="col">指令</th>
<th scope="col" class="synthesis-level">等级</th>
</tr>
<tr>
<th rowspan="4" scope="row"><span class="synthesis-name-cn">中火焰</span><span class="synthesis-name-ja" lang="ja">ファイラ</span><span class="synthesis-name-en" lang="en">Fira</span></th>
<td rowspan="4"><span class="synthesis-name-cn">火焰</span><span class="synthesis-name-ja" lang="ja">ファイア</span><span class="synthesis-name-en" lang="en">Fire</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">火焰</span><span class="synthesis-name-ja" lang="ja">ファイア</span><span class="synthesis-name-en" lang="en">Fire</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">火焰冲刺</span><span class="synthesis-name-ja" lang="ja">ファイアダッシュ</span><span class="synthesis-name-en" lang="en">Fire Dash</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">火焰强击</span><span class="synthesis-name-ja" lang="ja">ファイアストライク</span><span class="synthesis-name-en" lang="en">Fire Strike</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">点燃</span><span class="synthesis-name-ja" lang="ja">スナイプバーニング</span><span class="synthesis-name-en" lang="en">Ignite</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">大火焰</span><span class="synthesis-name-ja" lang="ja">ファイガ</span><span class="synthesis-name-en" lang="en">Firaga</span></th>
<td rowspan="3"><span class="synthesis-name-cn">中火焰</span><span class="synthesis-name-ja" lang="ja">ファイラ</span><span class="synthesis-name-en" lang="en">Fira</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">火焰</span><span class="synthesis-name-ja" lang="ja">ファイア</span><span class="synthesis-name-en" lang="en">Fire</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">雅：90%<br>泰、维：100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中火焰</span><span class="synthesis-name-ja" lang="ja">ファイラ</span><span class="synthesis-name-en" lang="en">Fira</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">雅：90%<br>泰、维：100%</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">火焰冲刺</span><span class="synthesis-name-ja" lang="ja">ファイアダッシュ</span><span class="synthesis-name-en" lang="en">Fire Dash</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">雅：90%<br>泰、维：100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">黑暗大火焰</span><span class="synthesis-name-ja" lang="ja">ダークファイガ</span><span class="synthesis-name-en" lang="en">Dark Firaga</span></th>
<td rowspan="2"><span class="synthesis-name-cn">大火焰</span><span class="synthesis-name-ja" lang="ja">ファイガ</span><span class="synthesis-name-en" lang="en">Firaga</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">黑暗迷雾</span><span class="synthesis-name-ja" lang="ja">ダークヘイズ</span><span class="synthesis-name-en" lang="en">Dark Haze</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">致盲</span><span class="synthesis-name-ja" lang="ja">ブラックアウト</span><span class="synthesis-name-en" lang="en">Blackout</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">爆裂大火焰</span><span class="synthesis-name-ja" lang="ja">クラッカーファイガ</span><span class="synthesis-name-en" lang="en">Fission Firaga</span></th>
<td rowspan="2"><span class="synthesis-name-cn">大火焰</span><span class="synthesis-name-ja" lang="ja">ファイガ</span><span class="synthesis-name-en" lang="en">Firaga</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中劲风</span><span class="synthesis-name-ja" lang="ja">エアロラ</span><span class="synthesis-name-en" lang="en">Aerora</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">雅：80%<br>泰、维：100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td rowspan="2"><span class="synthesis-name-cn">大劲风</span><span class="synthesis-name-ja" lang="ja">エアロガ</span><span class="synthesis-name-en" lang="en">Aeroga</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">雅：80%<br>泰、维：100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">中火焰</span><span class="synthesis-name-ja" lang="ja">ファイラ</span><span class="synthesis-name-en" lang="en">Fira</span></td>
<td class="synthesis-level">3</td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">雅：80%<br>泰、维：100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">三重大火焰</span><span class="synthesis-name-ja" lang="ja">トリプルファイガ</span><span class="synthesis-name-en" lang="en">Triple Firaga</span></th>
<td rowspan="3"><span class="synthesis-name-cn">大火焰</span><span class="synthesis-name-ja" lang="ja">ファイガ</span><span class="synthesis-name-en" lang="en">Firaga</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">最终破击</span><span class="synthesis-name-ja" lang="ja">ファイナルブレイク</span><span class="synthesis-name-en" lang="en">Blitz</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">90%</td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中火焰</span><span class="synthesis-name-ja" lang="ja">ファイラ</span><span class="synthesis-name-en" lang="en">Fira</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">90%</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">大火焰</span><span class="synthesis-name-ja" lang="ja">ファイガ</span><span class="synthesis-name-en" lang="en">Firaga</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">90%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">蔓延火焰</span><span class="synthesis-name-ja" lang="ja">バレッジファイア</span><span class="synthesis-name-en" lang="en">Crawling Fire</span></th>
<td rowspan="3"><span class="synthesis-name-cn">大火焰</span><span class="synthesis-name-ja" lang="ja">ファイガ</span><span class="synthesis-name-en" lang="en">Firaga</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">迟缓</span><span class="synthesis-name-ja" lang="ja">スロウ</span><span class="synthesis-name-en" lang="en">Slow</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">雅：80%<br>泰、维：100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中停止</span><span class="synthesis-name-ja" lang="ja">ストプラ</span><span class="synthesis-name-en" lang="en">Stopra</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">雅：80%<br>泰、维：100%</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">大停止</span><span class="synthesis-name-ja" lang="ja">ストプガ</span><span class="synthesis-name-en" lang="en">Stopga</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">雅：80%<br>泰、维：100%</td>
</tr>
<tr>
<th rowspan="4" scope="row"><span class="synthesis-name-cn">中冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザラ</span><span class="synthesis-name-en" lang="en">Blizzara</span></th>
<td rowspan="4"><span class="synthesis-name-cn">冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザド</span><span class="synthesis-name-en" lang="en">Blizzard</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザド</span><span class="synthesis-name-en" lang="en">Blizzard</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-e" title="查看合成能力 E 行">E</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">劲风</span><span class="synthesis-name-ja" lang="ja">エアロ</span><span class="synthesis-name-en" lang="en">Aero</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-h" title="查看合成能力 H 行">H</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">强击飞掷</span><span class="synthesis-name-ja" lang="ja">ストライクレイド</span><span class="synthesis-name-en" lang="en">Strike Raid</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-g" title="查看合成能力 G 行">G</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">冰雪之刃</span><span class="synthesis-name-ja" lang="ja">ブリザドブレード</span><span class="synthesis-name-en" lang="en">Blizzard Edge</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-g" title="查看合成能力 G 行">G</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">大冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザガ</span><span class="synthesis-name-en" lang="en">Blizzaga</span></th>
<td rowspan="3"><span class="synthesis-name-cn">中冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザラ</span><span class="synthesis-name-en" lang="en">Blizzara</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザド</span><span class="synthesis-name-en" lang="en">Blizzard</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-e" title="查看合成能力 E 行">E</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザラ</span><span class="synthesis-name-en" lang="en">Blizzara</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-f" title="查看合成能力 F 行">F</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">冰雪之刃</span><span class="synthesis-name-ja" lang="ja">ブリザドブレード</span><span class="synthesis-name-en" lang="en">Blizzard Edge</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-g" title="查看合成能力 G 行">G</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">三重大冰雪</span><span class="synthesis-name-ja" lang="ja">トリプルブリザガ</span><span class="synthesis-name-en" lang="en">Triple Blizzaga</span></th>
<td rowspan="3"><span class="synthesis-name-cn">大冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザガ</span><span class="synthesis-name-en" lang="en">Blizzaga</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザラ</span><span class="synthesis-name-en" lang="en">Blizzara</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-e" title="查看合成能力 E 行">E</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">大冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザガ</span><span class="synthesis-name-en" lang="en">Blizzaga</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-f" title="查看合成能力 F 行">F</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">最终破击</span><span class="synthesis-name-ja" lang="ja">ファイナルブレイク</span><span class="synthesis-name-en" lang="en">Blitz</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-g" title="查看合成能力 G 行">G</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">中雷电</span><span class="synthesis-name-ja" lang="ja">サンダラ</span><span class="synthesis-name-en" lang="en">Thundara</span></th>
<td rowspan="2"><span class="synthesis-name-cn">雷电</span><span class="synthesis-name-ja" lang="ja">サンダー</span><span class="synthesis-name-en" lang="en">Thunder</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">雷电</span><span class="synthesis-name-ja" lang="ja">サンダー</span><span class="synthesis-name-en" lang="en">Thunder</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">眩晕之刃</span><span class="synthesis-name-ja" lang="ja">スタンブレード</span><span class="synthesis-name-en" lang="en">Stun Edge</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビデ</span><span class="synthesis-name-en" lang="en">Zero Gravity</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">磁力</span><span class="synthesis-name-ja" lang="ja">マグネ</span><span class="synthesis-name-en" lang="en">Magnet</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-l" title="查看合成能力 L 行">L</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">大雷电</span><span class="synthesis-name-ja" lang="ja">サンダガ</span><span class="synthesis-name-en" lang="en">Thundaga</span></th>
<td rowspan="3"><span class="synthesis-name-cn">中雷电</span><span class="synthesis-name-ja" lang="ja">サンダラ</span><span class="synthesis-name-en" lang="en">Thundara</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">雷电</span><span class="synthesis-name-ja" lang="ja">サンダー</span><span class="synthesis-name-en" lang="en">Thunder</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">90%（未获得光束闪冲）<br>100%（已获得光束闪冲）</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中雷电</span><span class="synthesis-name-ja" lang="ja">サンダラ</span><span class="synthesis-name-en" lang="en">Thundara</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-j" title="查看合成能力 J 行">J</a></td>
<td class="synthesis-rate">90%（未获得光束闪冲）<br>100%（已获得光束闪冲）</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">束缚强击</span><span class="synthesis-name-ja" lang="ja">バインドストライク</span><span class="synthesis-name-en" lang="en">Binding Strike</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">90%（未获得光束闪冲）<br>100%（已获得光束闪冲）</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">大雷电射击</span><span class="synthesis-name-ja" lang="ja">サンダガショット</span><span class="synthesis-name-en" lang="en">Thundaga Shot</span></th>
<td rowspan="3"><span class="synthesis-name-cn">大雷电</span><span class="synthesis-name-ja" lang="ja">サンダガ</span><span class="synthesis-name-en" lang="en">Thundaga</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">大火焰</span><span class="synthesis-name-ja" lang="ja">ファイガ</span><span class="synthesis-name-en" lang="en">Firaga</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">85%（未获得流星雨）<br>100%（已获得流星雨）</td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">强击飞掷</span><span class="synthesis-name-ja" lang="ja">ストライクレイド</span><span class="synthesis-name-en" lang="en">Strike Raid</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">85%（未获得流星雨）<br>100%（已获得流星雨）</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">冰冻飞掷</span><span class="synthesis-name-ja" lang="ja">フリーズレイド</span><span class="synthesis-name-en" lang="en">Freeze Raid</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-e" title="查看合成能力 E 行">E</a></td>
<td class="synthesis-rate">85%（未获得流星雨）<br>100%（已获得流星雨）</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">中恢复</span><span class="synthesis-name-ja" lang="ja">ケアルラ</span><span class="synthesis-name-en" lang="en">Cura</span></th>
<td rowspan="3"><span class="synthesis-name-cn">恢复</span><span class="synthesis-name-ja" lang="ja">ケアル</span><span class="synthesis-name-en" lang="en">Cure</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">恢复</span><span class="synthesis-name-ja" lang="ja">ケアル</span><span class="synthesis-name-en" lang="en">Cure</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-m" title="查看合成能力 M 行">M</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">雷电</span><span class="synthesis-name-ja" lang="ja">サンダー</span><span class="synthesis-name-en" lang="en">Thunder</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">劲风</span><span class="synthesis-name-ja" lang="ja">エアロ</span><span class="synthesis-name-en" lang="en">Aero</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-o" title="查看合成能力 O 行">O</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">大恢复</span><span class="synthesis-name-ja" lang="ja">ケアルガ</span><span class="synthesis-name-en" lang="en">Curaga</span></th>
<td rowspan="2"><span class="synthesis-name-cn">中恢复</span><span class="synthesis-name-ja" lang="ja">ケアルラ</span><span class="synthesis-name-en" lang="en">Cura</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">恢复</span><span class="synthesis-name-ja" lang="ja">ケアル</span><span class="synthesis-name-en" lang="en">Cure</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-m" title="查看合成能力 M 行">M</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中恢复</span><span class="synthesis-name-ja" lang="ja">ケアルラ</span><span class="synthesis-name-en" lang="en">Cura</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="4" scope="row"><span class="synthesis-name-cn">爆破护盾</span><span class="synthesis-name-ja" lang="ja">デトネシールド</span><span class="synthesis-name-en" lang="en">Mine Shield</span></th>
<td><span class="synthesis-name-cn">中火焰</span><span class="synthesis-name-ja" lang="ja">ファイラ</span><span class="synthesis-name-en" lang="en">Fira</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビデ</span><span class="synthesis-name-en" lang="en">Zero Gravity</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-note"></td>
</tr>
<tr>
<td><span class="synthesis-name-cn">点燃</span><span class="synthesis-name-ja" lang="ja">スナイプバーニング</span><span class="synthesis-name-en" lang="en">Ignite</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">停止</span><span class="synthesis-name-ja" lang="ja">ストップ</span><span class="synthesis-name-en" lang="en">Stop</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td rowspan="2"><span class="synthesis-name-cn">反射格挡</span><span class="synthesis-name-ja" lang="ja">リフレクトガード</span><span class="synthesis-name-en" lang="en">Block</span></td>
<td class="synthesis-level">1</td>
<td><span class="synthesis-name-cn">中火焰</span><span class="synthesis-name-ja" lang="ja">ファイラ</span><span class="synthesis-name-en" lang="en">Fira</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
</tr>
<tr>
<td class="synthesis-level">1</td>
<td><span class="synthesis-name-cn">中停止</span><span class="synthesis-name-ja" lang="ja">ストプラ</span><span class="synthesis-name-en" lang="en">Stopra</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-m" title="查看合成能力 M 行">M</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="4" scope="row"><span class="synthesis-name-cn">爆破方阵</span><span class="synthesis-name-ja" lang="ja">デトネスクウェア</span><span class="synthesis-name-en" lang="en">Mine Square</span></th>
<td><span class="synthesis-name-cn">中火焰</span><span class="synthesis-name-ja" lang="ja">ファイラ</span><span class="synthesis-name-en" lang="en">Fira</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">停止</span><span class="synthesis-name-ja" lang="ja">ストップ</span><span class="synthesis-name-en" lang="en">Stop</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="4" class="synthesis-note"></td>
</tr>
<tr>
<td><span class="synthesis-name-cn">中劲风</span><span class="synthesis-name-ja" lang="ja">エアロラ</span><span class="synthesis-name-en" lang="en">Aerora</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">点燃</span><span class="synthesis-name-ja" lang="ja">スナイプバーニング</span><span class="synthesis-name-en" lang="en">Ignite</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td rowspan="2"><span class="synthesis-name-cn">反射</span><span class="synthesis-name-ja" lang="ja">リフレク</span><span class="synthesis-name-en" lang="en">Barrier</span></td>
<td class="synthesis-level">1</td>
<td><span class="synthesis-name-cn">中火焰</span><span class="synthesis-name-ja" lang="ja">ファイラ</span><span class="synthesis-name-en" lang="en">Fira</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
</tr>
<tr>
<td class="synthesis-level">1</td>
<td><span class="synthesis-name-cn">中停止</span><span class="synthesis-name-ja" lang="ja">ストプラ</span><span class="synthesis-name-en" lang="en">Stopra</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-m" title="查看合成能力 M 行">M</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">爆破追踪</span><span class="synthesis-name-ja" lang="ja">デトネチェイサー</span><span class="synthesis-name-en" lang="en">Seeker Mine</span></th>
<td rowspan="2"><span class="synthesis-name-cn">爆破护盾</span><span class="synthesis-name-ja" lang="ja">デトネシールド</span><span class="synthesis-name-en" lang="en">Mine Shield</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">爆破方阵</span><span class="synthesis-name-ja" lang="ja">デトネスクウェア</span><span class="synthesis-name-en" lang="en">Mine Square</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td rowspan="2"><span class="synthesis-name-cn">大磁力</span><span class="synthesis-name-ja" lang="ja">マグネガ</span><span class="synthesis-name-en" lang="en">Magnega</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">爆破方阵</span><span class="synthesis-name-ja" lang="ja">デトネスクウェア</span><span class="synthesis-name-en" lang="en">Mine Square</span></td>
<td class="synthesis-level">4</td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">中零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビラ</span><span class="synthesis-name-en" lang="en">Zero Gravira</span></th>
<td rowspan="2"><span class="synthesis-name-cn">零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビデ</span><span class="synthesis-name-en" lang="en">Zero Gravity</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">雷电</span><span class="synthesis-name-ja" lang="ja">サンダー</span><span class="synthesis-name-en" lang="en">Thunder</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">泰：90%<br>维、雅：100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビデ</span><span class="synthesis-name-en" lang="en">Zero Gravity</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-m" title="查看合成能力 M 行">M</a></td>
<td class="synthesis-rate">泰：90%<br>维、雅：100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">磁力</span><span class="synthesis-name-ja" lang="ja">マグネ</span><span class="synthesis-name-en" lang="en">Magnet</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">劲风</span><span class="synthesis-name-ja" lang="ja">エアロ</span><span class="synthesis-name-en" lang="en">Aero</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-p" title="查看合成能力 P 行">P</a></td>
<td class="synthesis-rate">泰：90%<br>维、雅：100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">大零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビガ</span><span class="synthesis-name-en" lang="en">Zero Graviga</span></th>
<td rowspan="3"><span class="synthesis-name-cn">中零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビラ</span><span class="synthesis-name-en" lang="en">Zero Gravira</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビデ</span><span class="synthesis-name-en" lang="en">Zero Gravity</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-m" title="查看合成能力 M 行">M</a></td>
<td class="synthesis-rate">泰：80%<br>维、雅：100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビラ</span><span class="synthesis-name-en" lang="en">Zero Gravira</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">泰：80%<br>维、雅：100%</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中雷电</span><span class="synthesis-name-ja" lang="ja">サンダラ</span><span class="synthesis-name-en" lang="en">Thundara</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">泰：80%<br>维、雅：100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">中磁力</span><span class="synthesis-name-ja" lang="ja">マグネラ</span><span class="synthesis-name-en" lang="en">Magnera</span></th>
<td rowspan="3"><span class="synthesis-name-cn">磁力</span><span class="synthesis-name-ja" lang="ja">マグネ</span><span class="synthesis-name-en" lang="en">Magnet</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">雷电</span><span class="synthesis-name-ja" lang="ja">サンダー</span><span class="synthesis-name-en" lang="en">Thunder</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">磁力</span><span class="synthesis-name-ja" lang="ja">マグネ</span><span class="synthesis-name-en" lang="en">Magnet</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-m" title="查看合成能力 M 行">M</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">眩晕之刃</span><span class="synthesis-name-ja" lang="ja">スタンブレード</span><span class="synthesis-name-en" lang="en">Stun Edge</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">大磁力</span><span class="synthesis-name-ja" lang="ja">マグネガ</span><span class="synthesis-name-en" lang="en">Magnega</span></th>
<td rowspan="2"><span class="synthesis-name-cn">中磁力</span><span class="synthesis-name-ja" lang="ja">マグネラ</span><span class="synthesis-name-en" lang="en">Magnera</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">磁力</span><span class="synthesis-name-ja" lang="ja">マグネ</span><span class="synthesis-name-en" lang="en">Magnet</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中磁力</span><span class="synthesis-name-ja" lang="ja">マグネラ</span><span class="synthesis-name-en" lang="en">Magnera</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-j" title="查看合成能力 J 行">J</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">金钱磁力</span><span class="synthesis-name-ja" lang="ja">マニーマグネ</span><span class="synthesis-name-en" lang="en">Munny Magnet</span></th>
<td rowspan="2"><span class="synthesis-name-cn">中磁力</span><span class="synthesis-name-ja" lang="ja">マグネラ</span><span class="synthesis-name-en" lang="en">Magnera</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中雷电</span><span class="synthesis-name-ja" lang="ja">サンダラ</span><span class="synthesis-name-en" lang="en">Thundara</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">祈愿之刃</span><span class="synthesis-name-ja" lang="ja">ウィッシュブレード</span><span class="synthesis-name-en" lang="en">Wishing Edge</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">能量磁力</span><span class="synthesis-name-ja" lang="ja">エナジーマグネ</span><span class="synthesis-name-en" lang="en">Energy Magnet</span></th>
<td rowspan="2"><span class="synthesis-name-cn">中磁力</span><span class="synthesis-name-ja" lang="ja">マグネラ</span><span class="synthesis-name-en" lang="en">Magnera</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">恢复</span><span class="synthesis-name-ja" lang="ja">ケアル</span><span class="synthesis-name-en" lang="en">Cure</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-m" title="查看合成能力 M 行">M</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中恢复</span><span class="synthesis-name-ja" lang="ja">ケアルラ</span><span class="synthesis-name-en" lang="en">Cura</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">D-Link磁力</span><span class="synthesis-name-ja" lang="ja">Ｄリンクマグネ</span><span class="synthesis-name-en" lang="en">D-Link Magnet</span></th>
<td rowspan="2"><span class="synthesis-name-cn">中磁力</span><span class="synthesis-name-ja" lang="ja">マグネラ</span><span class="synthesis-name-en" lang="en">Magnera</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビラ</span><span class="synthesis-name-en" lang="en">Zero Gravira</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-l" title="查看合成能力 L 行">L</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中停止</span><span class="synthesis-name-ja" lang="ja">ストプラ</span><span class="synthesis-name-en" lang="en">Stopra</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">中劲风</span><span class="synthesis-name-ja" lang="ja">エアロラ</span><span class="synthesis-name-en" lang="en">Aerora</span></th>
<td rowspan="3"><span class="synthesis-name-cn">劲风</span><span class="synthesis-name-ja" lang="ja">エアロ</span><span class="synthesis-name-en" lang="en">Aero</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">雷电</span><span class="synthesis-name-ja" lang="ja">サンダー</span><span class="synthesis-name-en" lang="en">Thunder</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">维：95%<br>泰、雅：100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">劲风</span><span class="synthesis-name-ja" lang="ja">エアロ</span><span class="synthesis-name-en" lang="en">Aero</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-e" title="查看合成能力 E 行">E</a></td>
<td class="synthesis-rate">维：95%<br>泰、雅：100%</td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">空中破击</span><span class="synthesis-name-ja" lang="ja">エリアルブレイク</span><span class="synthesis-name-en" lang="en">Quick Blitz</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-g" title="查看合成能力 G 行">G</a></td>
<td class="synthesis-rate">维：95%<br>泰、雅：100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">大劲风</span><span class="synthesis-name-ja" lang="ja">エアロガ</span><span class="synthesis-name-en" lang="en">Aeroga</span></th>
<td rowspan="3"><span class="synthesis-name-cn">中劲风</span><span class="synthesis-name-ja" lang="ja">エアロラ</span><span class="synthesis-name-en" lang="en">Aerora</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">劲风</span><span class="synthesis-name-ja" lang="ja">エアロ</span><span class="synthesis-name-en" lang="en">Aero</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-m" title="查看合成能力 M 行">M</a></td>
<td class="synthesis-rate">维：90%<br>泰、雅：100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中劲风</span><span class="synthesis-name-ja" lang="ja">エアロラ</span><span class="synthesis-name-en" lang="en">Aerora</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">维：90%<br>泰、雅：100%</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">空中破击</span><span class="synthesis-name-ja" lang="ja">エリアルブレイク</span><span class="synthesis-name-en" lang="en">Quick Blitz</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-o" title="查看合成能力 O 行">O</a></td>
<td class="synthesis-rate">维：90%<br>泰、雅：100%</td>
</tr>
<tr>
<th scope="row"><span class="synthesis-name-cn">神圣</span><span class="synthesis-name-ja" lang="ja">ホーリー</span><span class="synthesis-name-en" lang="en">Faith</span></th>
<td><span class="synthesis-name-cn">疾风飞掷</span><span class="synthesis-name-ja" lang="ja">ウインドレイド</span><span class="synthesis-name-en" lang="en">Wind Raid</span></td>
<td class="synthesis-level">5</td>
<td><span class="synthesis-name-cn">休息时间</span><span class="synthesis-name-ja" lang="ja">ブレイクタイム</span><span class="synthesis-name-en" lang="en">Break Time</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">100%</td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-note"></td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">冰冻</span><span class="synthesis-name-ja" lang="ja">フリーズ</span><span class="synthesis-name-en" lang="en">Deep Freeze</span></th>
<td rowspan="3"><span class="synthesis-name-cn">大冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザガ</span><span class="synthesis-name-en" lang="en">Blizzaga</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">冰冻飞掷</span><span class="synthesis-name-ja" lang="ja">フリーズレイド</span><span class="synthesis-name-en" lang="en">Freeze Raid</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-g" title="查看合成能力 G 行">G</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">束缚强击</span><span class="synthesis-name-ja" lang="ja">バインドストライク</span><span class="synthesis-name-en" lang="en">Binding Strike</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-h" title="查看合成能力 H 行">H</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">三重大冰雪</span><span class="synthesis-name-ja" lang="ja">トリプルブリザガ</span><span class="synthesis-name-en" lang="en">Triple Blizzaga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-f" title="查看合成能力 F 行">F</a></td>
<td class="synthesis-rate">100%</td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">冰川战艺</span><span class="synthesis-name-ja" lang="ja">グレイシャルアーツ</span><span class="synthesis-name-en" lang="en">Glacier</span></th>
<td rowspan="2"><span class="synthesis-name-cn">冰冻</span><span class="synthesis-name-ja" lang="ja">フリーズ</span><span class="synthesis-name-en" lang="en">Deep Freeze</span></td>
<td class="synthesis-level">5</td>
<td><span class="synthesis-name-cn">大冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザガ</span><span class="synthesis-name-en" lang="en">Blizzaga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-e" title="查看合成能力 E 行">E</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">5</td>
<td><span class="synthesis-name-cn">三重大冰雪</span><span class="synthesis-name-ja" lang="ja">トリプルブリザガ</span><span class="synthesis-name-en" lang="en">Triple Blizzaga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-f" title="查看合成能力 F 行">F</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">寒冰齐射</span><span class="synthesis-name-ja" lang="ja">アイスバラージュ</span><span class="synthesis-name-en" lang="en">Ice Barrage</span></th>
<td rowspan="2"><span class="synthesis-name-cn">大冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザガ</span><span class="synthesis-name-en" lang="en">Blizzaga</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">爆破护盾</span><span class="synthesis-name-ja" lang="ja">デトネシールド</span><span class="synthesis-name-en" lang="en">Mine Shield</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-f" title="查看合成能力 F 行">F</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">爆破方阵</span><span class="synthesis-name-ja" lang="ja">デトネスクウェア</span><span class="synthesis-name-en" lang="en">Mine Square</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-h" title="查看合成能力 H 行">H</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="5" scope="row"><span class="synthesis-name-cn">大火焰爆发</span><span class="synthesis-name-ja" lang="ja">ファイガバースト</span><span class="synthesis-name-en" lang="en">Firaga Burst</span></th>
<td rowspan="4"><span class="synthesis-name-cn">大火焰</span><span class="synthesis-name-ja" lang="ja">ファイガ</span><span class="synthesis-name-en" lang="en">Firaga</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中劲风</span><span class="synthesis-name-ja" lang="ja">エアロラ</span><span class="synthesis-name-en" lang="en">Aerora</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">20%</td>
<td rowspan="5" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="5" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="5" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="5" class="synthesis-note">稀有突变</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中停止</span><span class="synthesis-name-ja" lang="ja">ストプラ</span><span class="synthesis-name-en" lang="en">Stopra</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">20%</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">迟缓</span><span class="synthesis-name-ja" lang="ja">スロウ</span><span class="synthesis-name-en" lang="en">Slow</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">20%</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td rowspan="2"><span class="synthesis-name-cn">大劲风</span><span class="synthesis-name-ja" lang="ja">エアロガ</span><span class="synthesis-name-en" lang="en">Aeroga</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">20%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">中火焰</span><span class="synthesis-name-ja" lang="ja">ファイラ</span><span class="synthesis-name-en" lang="en">Fira</span></td>
<td class="synthesis-level">3</td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">20%</td>
</tr>
<tr>
<th rowspan="4" scope="row"><span class="synthesis-name-cn">怒焰风暴</span><span class="synthesis-name-ja" lang="ja">レイジングストーム</span><span class="synthesis-name-en" lang="en">Raging Storm</span></th>
<td><span class="synthesis-name-cn">爆裂大火焰</span><span class="synthesis-name-ja" lang="ja">クラッカーファイガ</span><span class="synthesis-name-en" lang="en">Fission Firaga</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">大火焰爆发</span><span class="synthesis-name-ja" lang="ja">ファイガバースト</span><span class="synthesis-name-en" lang="en">Firaga Burst</span></td>
<td class="synthesis-level">5</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="4" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="4" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="4" class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-note"></td>
</tr>
<tr>
<td rowspan="2"><span class="synthesis-name-cn">中火焰</span><span class="synthesis-name-ja" lang="ja">ファイラ</span><span class="synthesis-name-en" lang="en">Fira</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">火焰</span><span class="synthesis-name-ja" lang="ja">ファイア</span><span class="synthesis-name-en" lang="en">Fire</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">10%</td>
<td rowspan="3" class="synthesis-note">稀有突变</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中火焰</span><span class="synthesis-name-ja" lang="ja">ファイラ</span><span class="synthesis-name-en" lang="en">Fira</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">10%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">最终破击</span><span class="synthesis-name-ja" lang="ja">ファイナルブレイク</span><span class="synthesis-name-en" lang="en">Blitz</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">大火焰</span><span class="synthesis-name-ja" lang="ja">ファイガ</span><span class="synthesis-name-en" lang="en">Firaga</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-d" title="查看合成能力 D 行">D</a></td>
<td class="synthesis-rate">10%</td>
</tr>
<tr>
<th scope="row"><span class="synthesis-name-cn">百万核爆</span><span class="synthesis-name-ja" lang="ja">メガフレア</span><span class="synthesis-name-en" lang="en">Mega Flare</span></th>
<td><span class="synthesis-name-cn">爆裂大火焰</span><span class="synthesis-name-ja" lang="ja">クラッカーファイガ</span><span class="synthesis-name-en" lang="en">Fission Firaga</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">蔓延火焰</span><span class="synthesis-name-ja" lang="ja">バレッジファイア</span><span class="synthesis-name-en" lang="en">Crawling Fire</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">100%</td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-note"></td>
</tr>
<tr>
<th rowspan="5" scope="row"><span class="synthesis-name-cn">龙卷</span><span class="synthesis-name-ja" lang="ja">トルネド</span><span class="synthesis-name-en" lang="en">Tornado</span></th>
<td><span class="synthesis-name-cn">大劲风</span><span class="synthesis-name-ja" lang="ja">エアロガ</span><span class="synthesis-name-en" lang="en">Aeroga</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">大磁力</span><span class="synthesis-name-ja" lang="ja">マグネガ</span><span class="synthesis-name-en" lang="en">Magnega</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="5" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="5" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="5" class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-note"></td>
</tr>
<tr>
<td><span class="synthesis-name-cn">中劲风</span><span class="synthesis-name-ja" lang="ja">エアロラ</span><span class="synthesis-name-en" lang="en">Aerora</span></td>
<td class="synthesis-level">3</td>
<td rowspan="2"><span class="synthesis-name-cn">中劲风</span><span class="synthesis-name-ja" lang="ja">エアロラ</span><span class="synthesis-name-en" lang="en">Aerora</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">10%</td>
<td rowspan="4" class="synthesis-note">稀有突变</td>
</tr>
<tr>
<td rowspan="3"><span class="synthesis-name-cn">劲风</span><span class="synthesis-name-ja" lang="ja">エアロ</span><span class="synthesis-name-en" lang="en">Aero</span></td>
<td class="synthesis-level">3</td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-m" title="查看合成能力 M 行">M</a></td>
<td class="synthesis-rate">10%</td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">劲风</span><span class="synthesis-name-ja" lang="ja">エアロ</span><span class="synthesis-name-en" lang="en">Aero</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-e" title="查看合成能力 E 行">E</a></td>
<td class="synthesis-rate">5%</td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">雷电</span><span class="synthesis-name-ja" lang="ja">サンダー</span><span class="synthesis-name-en" lang="en">Thunder</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">5%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">驱逐</span><span class="synthesis-name-ja" lang="ja">デジョン</span><span class="synthesis-name-en" lang="en">Warp</span></th>
<td rowspan="2"><span class="synthesis-name-cn">零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビデ</span><span class="synthesis-name-en" lang="en">Zero Gravity</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビデ</span><span class="synthesis-name-en" lang="en">Zero Gravity</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-m" title="查看合成能力 M 行">M</a></td>
<td class="synthesis-rate">10%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note">稀有突变</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビラ</span><span class="synthesis-name-en" lang="en">Zero Gravira</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-m" title="查看合成能力 M 行">M</a></td>
<td class="synthesis-rate">20%</td>
</tr>
<tr>
<th rowspan="5" scope="row"><span class="synthesis-name-cn">地震</span><span class="synthesis-name-ja" lang="ja">クエイク</span><span class="synthesis-name-en" lang="en">Quake</span></th>
<td rowspan="3"><span class="synthesis-name-cn">残暴冲击</span><span class="synthesis-name-ja" lang="ja">ブルータルブラスト</span><span class="synthesis-name-en" lang="en">Brutal Blast</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">大零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビガ</span><span class="synthesis-name-en" lang="en">Zero Graviga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">90%</td>
<td rowspan="5" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="5" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="5" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">大磁力</span><span class="synthesis-name-ja" lang="ja">マグネガ</span><span class="synthesis-name-en" lang="en">Magnega</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">90%</td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">残暴冲击</span><span class="synthesis-name-ja" lang="ja">ブルータルブラスト</span><span class="synthesis-name-en" lang="en">Brutal Blast</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">30%</td>
<td rowspan="3" class="synthesis-note">稀有突变</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">眩晕之刃</span><span class="synthesis-name-ja" lang="ja">スタンブレード</span><span class="synthesis-name-en" lang="en">Stun Edge</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">爆破护盾</span><span class="synthesis-name-ja" lang="ja">デトネシールド</span><span class="synthesis-name-en" lang="en">Mine Shield</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-o" title="查看合成能力 O 行">O</a></td>
<td class="synthesis-rate">30%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">束缚强击</span><span class="synthesis-name-ja" lang="ja">バインドストライク</span><span class="synthesis-name-en" lang="en">Binding Strike</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">爆破方阵</span><span class="synthesis-name-ja" lang="ja">デトネスクウェア</span><span class="synthesis-name-en" lang="en">Mine Square</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-l" title="查看合成能力 L 行">L</a></td>
<td class="synthesis-rate">30%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">陨石</span><span class="synthesis-name-ja" lang="ja">メテオ</span><span class="synthesis-name-en" lang="en">Meteor</span></th>
<td><span class="synthesis-name-cn">大地破击</span><span class="synthesis-name-ja" lang="ja">ガイアブレイク</span><span class="synthesis-name-en" lang="en">Geo Impact</span></td>
<td class="synthesis-level">5</td>
<td><span class="synthesis-name-cn">地震</span><span class="synthesis-name-ja" lang="ja">クエイク</span><span class="synthesis-name-en" lang="en">Quake</span></td>
<td class="synthesis-level">5</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-note"></td>
</tr>
<tr>
<td rowspan="2"><span class="synthesis-name-cn">残暴冲击</span><span class="synthesis-name-ja" lang="ja">ブルータルブラスト</span><span class="synthesis-name-en" lang="en">Brutal Blast</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">大磁力</span><span class="synthesis-name-ja" lang="ja">マグネガ</span><span class="synthesis-name-en" lang="en">Magnega</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">10%</td>
<td rowspan="2" class="synthesis-note">稀有突变</td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">大零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビガ</span><span class="synthesis-name-en" lang="en">Zero Graviga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">10%</td>
</tr>
<tr>
<th scope="row"><span class="synthesis-name-cn">大气破碎</span><span class="synthesis-name-ja" lang="ja">アトモスブレイク</span><span class="synthesis-name-en" lang="en">Transcendence</span></th>
<td><span class="synthesis-name-cn">磁力螺旋</span><span class="synthesis-name-ja" lang="ja">マグネスパイラル</span><span class="synthesis-name-en" lang="en">Magnet Spiral</span></td>
<td class="synthesis-level">5</td>
<td><span class="synthesis-name-cn">大零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビガ</span><span class="synthesis-name-en" lang="en">Zero Graviga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-j" title="查看合成能力 J 行">J</a></td>
<td class="synthesis-rate">100%</td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-note"></td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">缩小</span><span class="synthesis-name-ja" lang="ja">ミニマム</span><span class="synthesis-name-en" lang="en">Mini</span></th>
<td rowspan="2"><span class="synthesis-name-cn">大磁力</span><span class="synthesis-name-ja" lang="ja">マグネガ</span><span class="synthesis-name-en" lang="en">Magnega</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">束缚</span><span class="synthesis-name-ja" lang="ja">バインド</span><span class="synthesis-name-en" lang="en">Bind</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">大磁力</span><span class="synthesis-name-ja" lang="ja">マグネガ</span><span class="synthesis-name-en" lang="en">Magnega</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-j" title="查看合成能力 J 行">J</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">驱逐</span><span class="synthesis-name-ja" lang="ja">デジョン</span><span class="synthesis-name-en" lang="en">Warp</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">中磁力</span><span class="synthesis-name-ja" lang="ja">マグネラ</span><span class="synthesis-name-en" lang="en">Magnera</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">100%</td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">致盲</span><span class="synthesis-name-ja" lang="ja">ブラックアウト</span><span class="synthesis-name-en" lang="en">Blackout</span></th>
<td><span class="synthesis-name-cn">零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビデ</span><span class="synthesis-name-en" lang="en">Zero Gravity</span></td>
<td class="synthesis-level">3</td>
<td rowspan="2"><span class="synthesis-name-cn">混乱</span><span class="synthesis-name-ja" lang="ja">コンフュ</span><span class="synthesis-name-en" lang="en">Confuse</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-m" title="查看合成能力 M 行">M</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td rowspan="2"><span class="synthesis-name-cn">中零重力</span><span class="synthesis-name-ja" lang="ja">ゼログラビラ</span><span class="synthesis-name-en" lang="en">Zero Gravira</span></td>
<td class="synthesis-level">3</td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">剧毒</span><span class="synthesis-name-ja" lang="ja">ポイズン</span><span class="synthesis-name-en" lang="en">Poison</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-p" title="查看合成能力 P 行">P</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">点燃</span><span class="synthesis-name-ja" lang="ja">スナイプバーニング</span><span class="synthesis-name-en" lang="en">Ignite</span></th>
<td rowspan="2"><span class="synthesis-name-cn">束缚</span><span class="synthesis-name-ja" lang="ja">バインド</span><span class="synthesis-name-en" lang="en">Bind</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">火焰</span><span class="synthesis-name-ja" lang="ja">ファイア</span><span class="synthesis-name-en" lang="en">Fire</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-a" title="查看合成能力 A 行">A</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中火焰</span><span class="synthesis-name-ja" lang="ja">ファイラ</span><span class="synthesis-name-en" lang="en">Fira</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">中停止</span><span class="synthesis-name-ja" lang="ja">ストプラ</span><span class="synthesis-name-en" lang="en">Stopra</span></th>
<td rowspan="2"><span class="synthesis-name-cn">停止</span><span class="synthesis-name-ja" lang="ja">ストップ</span><span class="synthesis-name-en" lang="en">Stop</span></td>
<td class="synthesis-level">2</td>
<td><span class="synthesis-name-cn">停止</span><span class="synthesis-name-ja" lang="ja">ストップ</span><span class="synthesis-name-en" lang="en">Stop</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">2</td>
<td rowspan="2"><span class="synthesis-name-cn">迟缓</span><span class="synthesis-name-ja" lang="ja">スロウ</span><span class="synthesis-name-en" lang="en">Slow</span></td>
<td class="synthesis-level">2</td>
<td><a href="#ability-row-k" title="查看合成能力 K 行">K</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">迟缓</span><span class="synthesis-name-ja" lang="ja">スロウ</span><span class="synthesis-name-en" lang="en">Slow</span></td>
<td class="synthesis-level">3</td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-l" title="查看合成能力 L 行">L</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">大停止</span><span class="synthesis-name-ja" lang="ja">ストプガ</span><span class="synthesis-name-en" lang="en">Stopga</span></th>
<td rowspan="2"><span class="synthesis-name-cn">中停止</span><span class="synthesis-name-ja" lang="ja">ストプラ</span><span class="synthesis-name-en" lang="en">Stopra</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">停止</span><span class="synthesis-name-ja" lang="ja">ストップ</span><span class="synthesis-name-en" lang="en">Stop</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中停止</span><span class="synthesis-name-ja" lang="ja">ストプラ</span><span class="synthesis-name-en" lang="en">Stopra</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-j" title="查看合成能力 J 行">J</a></td>
<td class="synthesis-rate">100%</td>
</tr>
</table>
</div>
</section>

<section class="synthesis-section" id="synthesis-other">
<h2>其他</h2>
<div class="synthesis-table-wrap" role="region" tabindex="0" aria-label="其他表格 1，可横向滚动">
<table class="synthesis-table synthesis-table--other">
<caption>其他表格 1（源工作表）</caption>
<tr class="synthesis-header-row">
<th rowspan="2" scope="col">名称</th>
<th colspan="2" scope="colgroup">SLOT1</th>
<th colspan="2" scope="colgroup">SLOT2</th>
<th rowspan="2" scope="col">对应合成行</th>
<th rowspan="2" scope="col" class="synthesis-rate">合成成功率</th>
<th rowspan="2" scope="col">泰</th>
<th rowspan="2" scope="col">维</th>
<th rowspan="2" scope="col">雅</th>
<th rowspan="2" scope="col" class="synthesis-note">备注</th>
</tr>
<tr class="synthesis-header-row">
<th scope="col">指令</th>
<th scope="col" class="synthesis-level">等级</th>
<th scope="col">指令</th>
<th scope="col" class="synthesis-level">等级</th>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">连击滑行</span><span class="synthesis-name-ja" lang="ja">コンボスライド</span><span class="synthesis-name-en" lang="en">Homing Slide</span></th>
<td rowspan="2"><span class="synthesis-name-cn">滑行冲刺</span><span class="synthesis-name-ja" lang="ja">スライドダッシュ</span><span class="synthesis-name-en" lang="en">Sliding Dash</span></td>
<td class="synthesis-level">3</td>
<td><span class="synthesis-name-cn">中磁力</span><span class="synthesis-name-ja" lang="ja">マグネラ</span><span class="synthesis-name-en" lang="en">Magnera</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-p" title="查看合成能力 P 行">P</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">3</td>
<td rowspan="2"><span class="synthesis-name-cn">空中滑行</span><span class="synthesis-name-ja" lang="ja">エアスライド</span><span class="synthesis-name-en" lang="en">Air Slide</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td><span class="synthesis-name-cn">磁力</span><span class="synthesis-name-ja" lang="ja">マグネ</span><span class="synthesis-name-en" lang="en">Magnet</span></td>
<td class="synthesis-level">3</td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-l" title="查看合成能力 L 行">L</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">冰霜滑行</span><span class="synthesis-name-ja" lang="ja">アイススライド</span><span class="synthesis-name-en" lang="en">Ice Slide</span></th>
<td rowspan="2"><span class="synthesis-name-cn">空中滑行</span><span class="synthesis-name-ja" lang="ja">エアスライド</span><span class="synthesis-name-en" lang="en">Air Slide</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">冰雪之刃</span><span class="synthesis-name-ja" lang="ja">ブリザドブレード</span><span class="synthesis-name-en" lang="en">Blizzard Edge</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-f" title="查看合成能力 F 行">F</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">大冰雪</span><span class="synthesis-name-ja" lang="ja">ブリザガ</span><span class="synthesis-name-en" lang="en">Blizzaga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-h" title="查看合成能力 H 行">H</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">火焰滑翔</span><span class="synthesis-name-ja" lang="ja">ファイアグライド</span><span class="synthesis-name-en" lang="en">Fire Glide</span></th>
<td rowspan="2"><span class="synthesis-name-cn">滑翔</span><span class="synthesis-name-ja" lang="ja">グライド</span><span class="synthesis-name-en" lang="en">Glide</span></td>
<td class="synthesis-level">不限</td>
<td><span class="synthesis-name-cn">火焰闪击</span><span class="synthesis-name-ja" lang="ja">ファイアブリッツ</span><span class="synthesis-name-en" lang="en">Fire Surge</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">不限</td>
<td><span class="synthesis-name-cn">大火焰</span><span class="synthesis-name-ja" lang="ja">ファイガ</span><span class="synthesis-name-en" lang="en">Firaga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="3" scope="row"><span class="synthesis-name-cn">火焰翻滚</span><span class="synthesis-name-ja" lang="ja">ファイアロール</span><span class="synthesis-name-en" lang="en">Firewheel</span></th>
<td rowspan="3"><span class="synthesis-name-cn">轮式翻滚</span><span class="synthesis-name-ja" lang="ja">ホイールロール</span><span class="synthesis-name-en" lang="en">Cartwheel</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">火焰闪击</span><span class="synthesis-name-ja" lang="ja">ファイアブリッツ</span><span class="synthesis-name-en" lang="en">Fire Surge</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">90%</td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="3" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="3" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">大火焰</span><span class="synthesis-name-ja" lang="ja">ファイガ</span><span class="synthesis-name-en" lang="en">Firaga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">爆裂大火焰</span><span class="synthesis-name-ja" lang="ja">クラッカーファイガ</span><span class="synthesis-name-en" lang="en">Fission Firaga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-b" title="查看合成能力 B 行">B</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">雷电翻滚</span><span class="synthesis-name-ja" lang="ja">サンダーロール</span><span class="synthesis-name-en" lang="en">Thunder Roll</span></th>
<td rowspan="2"><span class="synthesis-name-cn">闪避翻滚</span><span class="synthesis-name-ja" lang="ja">ドッジロール</span><span class="synthesis-name-en" lang="en">Dodge Roll</span></td>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">雷电闪击</span><span class="synthesis-name-ja" lang="ja">サンダーブリッツ</span><span class="synthesis-name-en" lang="en">Thunder Surge</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-p" title="查看合成能力 P 行">P</a></td>
<td class="synthesis-rate">20%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">4</td>
<td><span class="synthesis-name-cn">大雷电</span><span class="synthesis-name-ja" lang="ja">サンダガ</span><span class="synthesis-name-en" lang="en">Thundaga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-l" title="查看合成能力 L 行">L</a></td>
<td class="synthesis-rate">80%</td>
</tr>
</table>
</div>
<div class="synthesis-table-wrap" role="region" tabindex="0" aria-label="其他表格 2，可横向滚动">
<table class="synthesis-table synthesis-table--other">
<caption>其他表格 2（源工作表）</caption>
<tr class="synthesis-header-row">
<th rowspan="2" scope="col">名称</th>
<th colspan="2" scope="colgroup">SLOT1</th>
<th colspan="2" scope="colgroup">SLOT2</th>
<th rowspan="2" scope="col">对应合成行</th>
<th rowspan="2" scope="col" class="synthesis-rate">合成成功率</th>
<th rowspan="2" scope="col">泰</th>
<th rowspan="2" scope="col">维</th>
<th rowspan="2" scope="col">雅</th>
<th rowspan="2" scope="col" class="synthesis-note">备注</th>
</tr>
<tr class="synthesis-header-row">
<th scope="col">指令</th>
<th scope="col" class="synthesis-level">等级</th>
<th scope="col">指令</th>
<th scope="col" class="synthesis-level">等级</th>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">恢复格挡</span><span class="synthesis-name-ja" lang="ja">レストアガード</span><span class="synthesis-name-en" lang="en">Renewal Block</span></th>
<td rowspan="2"><span class="synthesis-name-cn">反射格挡</span><span class="synthesis-name-ja" lang="ja">リフレクトガード</span><span class="synthesis-name-en" lang="en">Block</span></td>
<td class="synthesis-level">1</td>
<td><span class="synthesis-name-cn">大恢复</span><span class="synthesis-name-ja" lang="ja">ケアルガ</span><span class="synthesis-name-en" lang="en">Curaga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-p" title="查看合成能力 P 行">P</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">1</td>
<td><span class="synthesis-name-cn">净化</span><span class="synthesis-name-ja" lang="ja">エスナ</span><span class="synthesis-name-en" lang="en">Esuna</span></td>
<td class="synthesis-level">不限</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">眩晕格挡</span><span class="synthesis-name-ja" lang="ja">スタンガード</span><span class="synthesis-name-en" lang="en">Stun Block</span></th>
<td rowspan="2"><span class="synthesis-name-cn">反射格挡</span><span class="synthesis-name-ja" lang="ja">リフレクトガード</span><span class="synthesis-name-en" lang="en">Block</span></td>
<td class="synthesis-level">1</td>
<td><span class="synthesis-name-cn">眩晕之刃</span><span class="synthesis-name-ja" lang="ja">スタンブレード</span><span class="synthesis-name-en" lang="en">Stun Edge</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-l" title="查看合成能力 L 行">L</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">1</td>
<td><span class="synthesis-name-cn">大雷电</span><span class="synthesis-name-ja" lang="ja">サンダガ</span><span class="synthesis-name-en" lang="en">Thundaga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-i" title="查看合成能力 I 行">I</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">剧毒格挡</span><span class="synthesis-name-ja" lang="ja">ポイズンガード</span><span class="synthesis-name-en" lang="en">Poison Block</span></th>
<td rowspan="2"><span class="synthesis-name-cn">反射格挡</span><span class="synthesis-name-ja" lang="ja">リフレクトガード</span><span class="synthesis-name-en" lang="en">Block</span></td>
<td class="synthesis-level">1</td>
<td><span class="synthesis-name-cn">剧毒之刃</span><span class="synthesis-name-ja" lang="ja">ポイズンブレード</span><span class="synthesis-name-en" lang="en">Poison Edge</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-h" title="查看合成能力 H 行">H</a></td>
<td class="synthesis-rate">80%（未获得生化齐射）<br>100%（已获得生化齐射）</td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">1</td>
<td><span class="synthesis-name-cn">剧毒</span><span class="synthesis-name-ja" lang="ja">ポイズン</span><span class="synthesis-name-en" lang="en">Poison</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-p" title="查看合成能力 P 行">P</a></td>
<td class="synthesis-rate">80%（未获得生化齐射）<br>100%（已获得生化齐射）</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">恢复屏障</span><span class="synthesis-name-ja" lang="ja">レストアバリア</span><span class="synthesis-name-en" lang="en">Renewal Barrier</span></th>
<td rowspan="2"><span class="synthesis-name-cn">反射</span><span class="synthesis-name-ja" lang="ja">リフレク</span><span class="synthesis-name-en" lang="en">Barrier</span></td>
<td class="synthesis-level">1</td>
<td><span class="synthesis-name-cn">大恢复</span><span class="synthesis-name-ja" lang="ja">ケアルガ</span><span class="synthesis-name-en" lang="en">Curaga</span></td>
<td class="synthesis-level">4</td>
<td><a href="#ability-row-p" title="查看合成能力 P 行">P</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note"></td>
</tr>
<tr>
<td class="synthesis-level">1</td>
<td><span class="synthesis-name-cn">净化</span><span class="synthesis-name-ja" lang="ja">エスナ</span><span class="synthesis-name-en" lang="en">Esuna</span></td>
<td class="synthesis-level">不限</td>
<td><a href="#ability-row-n" title="查看合成能力 N 行">N</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th rowspan="2" scope="row"><span class="synthesis-name-cn">混乱屏障</span><span class="synthesis-name-ja" lang="ja">コンフュバリア</span><span class="synthesis-name-en" lang="en">Confuse Barrier</span></th>
<td rowspan="2"><span class="synthesis-name-cn">反射</span><span class="synthesis-name-ja" lang="ja">リフレク</span><span class="synthesis-name-en" lang="en">Barrier</span></td>
<td class="synthesis-level">1</td>
<td><span class="synthesis-name-cn">混乱强击</span><span class="synthesis-name-ja" lang="ja">コンフュストライク</span><span class="synthesis-name-en" lang="en">Confusion Strike</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">100%</td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-no"><span aria-label="不可">×</span></td>
<td rowspan="2" class="synthesis-yes"><span aria-label="可">○</span></td>
<td rowspan="2" class="synthesis-note">深空地区任务：欢茶水母冻★3获得</td>
</tr>
<tr>
<td class="synthesis-level">1</td>
<td><span class="synthesis-name-cn">混乱</span><span class="synthesis-name-ja" lang="ja">コンフュ</span><span class="synthesis-name-en" lang="en">Confuse</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-l" title="查看合成能力 L 行">L</a></td>
<td class="synthesis-rate">100%</td>
</tr>
<tr>
<th scope="row"><span class="synthesis-name-cn">停止屏障</span><span class="synthesis-name-ja" lang="ja">ストップバリア</span><span class="synthesis-name-en" lang="en">Stop Barrier</span></th>
<td><span class="synthesis-name-cn">反射</span><span class="synthesis-name-ja" lang="ja">リフレク</span><span class="synthesis-name-en" lang="en">Barrier</span></td>
<td class="synthesis-level">1</td>
<td><span class="synthesis-name-cn">大停止</span><span class="synthesis-name-ja" lang="ja">ストプガ</span><span class="synthesis-name-en" lang="en">Stopga</span></td>
<td class="synthesis-level">3</td>
<td><a href="#ability-row-c" title="查看合成能力 C 行">C</a></td>
<td class="synthesis-rate">80%</td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-no"><span aria-label="不可">×</span></td>
<td class="synthesis-yes"><span aria-label="可">○</span></td>
<td class="synthesis-note">阿库娅：贴纸70P获得</td>
</tr>
</table>
</div>
</section>

<section class="synthesis-section" id="synthesis-abilities">
<h2>合成能力</h2>
<div class="synthesis-table-wrap" role="region" tabindex="0" aria-label="合成能力表格，可横向滚动">
<table class="synthesis-table synthesis-table--abilities">
<caption>合成能力（源工作表）</caption>
<tr class="synthesis-header-row">
<th scope="col"></th>
<th scope="col"><span class="synthesis-name-cn">闪耀结晶</span><span class="synthesis-name-ja" lang="ja">きらめく結晶</span><span class="synthesis-name-en" lang="en">Shimmering Crystal</span></th>
<th scope="col"><span class="synthesis-name-cn">时光结晶</span><span class="synthesis-name-ja" lang="ja">時の結晶</span><span class="synthesis-name-en" lang="en">Fleeting Crystal</span></th>
<th scope="col"><span class="synthesis-name-cn">力量结晶</span><span class="synthesis-name-ja" lang="ja">力の結晶</span><span class="synthesis-name-en" lang="en">Pulsing Crystal</span></th>
<th scope="col"><span class="synthesis-name-cn">充盈结晶</span><span class="synthesis-name-ja" lang="ja">みなぎる結晶</span><span class="synthesis-name-en" lang="en">Wellspring Crystal</span></th>
<th scope="col"><span class="synthesis-name-cn">润泽结晶</span><span class="synthesis-name-ja" lang="ja">うるおいの結晶</span><span class="synthesis-name-en" lang="en">Soothing Crystal</span></th>
<th scope="col"><span class="synthesis-name-cn">饱满结晶</span><span class="synthesis-name-ja" lang="ja">満たされる結晶</span><span class="synthesis-name-en" lang="en">Hungry Crystal</span></th>
<th scope="col"><span class="synthesis-name-cn">轮回结晶</span><span class="synthesis-name-ja" lang="ja">めぐりくる結晶</span><span class="synthesis-name-en" lang="en">Abounding Crystal</span></th>
<th scope="col"><span class="synthesis-name-cn">混沌结晶</span><span class="synthesis-name-ja" lang="ja">混沌の結晶</span><span class="synthesis-name-en" lang="en">Chaos Crystal</span></th>
<th scope="col"><span class="synthesis-name-cn">秘藏原石</span><span class="synthesis-name-ja" lang="ja">秘められし原石</span><span class="synthesis-name-en" lang="en">Secret Gem</span></th>
</tr>
<tr class="synthesis-header-row">
<th scope="col" id="ability-row-a">A</th>
<th scope="col"><span class="synthesis-name-cn">火焰提升</span><span class="synthesis-name-ja" lang="ja">ファイアアップ</span><span class="synthesis-name-en" lang="en">Fire Boost</span></th>
<th scope="col"><span class="synthesis-name-cn">魔法加速</span><span class="synthesis-name-ja" lang="ja">マジックヘイスト</span><span class="synthesis-name-en" lang="en">Magic Haste</span></th>
<th scope="col"><span class="synthesis-name-cn">绿叶庇护</span><span class="synthesis-name-ja" lang="ja">リーフベール</span><span class="synthesis-name-en" lang="en">Leaf Bracer</span></th>
<th scope="col"><span class="synthesis-name-cn">空中连击加成</span><span class="synthesis-name-ja" lang="ja">エアコンボプラス</span><span class="synthesis-name-en" lang="en">Air Combo Plus</span></th>
<th scope="col"><span class="synthesis-name-cn">HP提升</span><span class="synthesis-name-ja" lang="ja">ＨＰアップ</span><span class="synthesis-name-en" lang="en">HP Boost</span></th>
<th scope="col"><span class="synthesis-name-cn">HP奖球提升</span><span class="synthesis-name-ja" lang="ja">ＨＰプライズアップ</span><span class="synthesis-name-en" lang="en">HP Prize Plus</span></th>
<th scope="col"><span class="synthesis-name-cn">链接奖球提升</span><span class="synthesis-name-ja" lang="ja">リンクプライズアップ</span><span class="synthesis-name-en" lang="en">Link Prize Plus</span></th>
<th scope="col">随机</th>
<th scope="col">随机</th>
</tr>
<tr>
<th scope="row" id="ability-row-b">B</th>
<td><span class="synthesis-name-cn">火焰提升</span><span class="synthesis-name-ja" lang="ja">ファイアアップ</span><span class="synthesis-name-en" lang="en">Fire Boost</span></td>
<td><span class="synthesis-name-cn">装填增强</span><span class="synthesis-name-ja" lang="ja">リロードブースト</span><span class="synthesis-name-en" lang="en">Reload Boost</span></td>
<td><span class="synthesis-name-cn">指令终结提升</span><span class="synthesis-name-ja" lang="ja">コマンドＦアップ</span><span class="synthesis-name-en" lang="en">Finish Boost</span></td>
<td><span class="synthesis-name-cn">连击生还</span><span class="synthesis-name-ja" lang="ja">コンボリーヴ</span><span class="synthesis-name-en" lang="en">Once More</span></td>
<td><span class="synthesis-name-cn">受伤汲取</span><span class="synthesis-name-ja" lang="ja">ダメージアスピル</span><span class="synthesis-name-en" lang="en">Damage Syphon</span></td>
<td><span class="synthesis-name-cn">HP奖球提升</span><span class="synthesis-name-ja" lang="ja">ＨＰプライズアップ</span><span class="synthesis-name-en" lang="en">HP Prize Plus</span></td>
<td><span class="synthesis-name-cn">EXP良机</span><span class="synthesis-name-ja" lang="ja">ＥＸＰチャンス</span><span class="synthesis-name-en" lang="en">EXP Chance</span></td>
<td>随机</td>
<td>随机</td>
</tr>
<tr>
<th scope="row" id="ability-row-c">C</th>
<td><span class="synthesis-name-cn">火焰防护</span><span class="synthesis-name-ja" lang="ja">ファイアガード</span><span class="synthesis-name-en" lang="en">Fire Screen</span></td>
<td><span class="synthesis-name-cn">攻击加速</span><span class="synthesis-name-ja" lang="ja">アタックヘイスト</span><span class="synthesis-name-en" lang="en">Attack Haste</span></td>
<td><span class="synthesis-name-cn">指令终结提升</span><span class="synthesis-name-ja" lang="ja">コマンドＦアップ</span><span class="synthesis-name-en" lang="en">Finish Boost</span></td>
<td><span class="synthesis-name-cn">连击加成</span><span class="synthesis-name-ja" lang="ja">コンボプラス</span><span class="synthesis-name-en" lang="en">Combo Plus</span></td>
<td><span class="synthesis-name-cn">HP提升</span><span class="synthesis-name-ja" lang="ja">ＨＰアップ</span><span class="synthesis-name-en" lang="en">HP Boost</span></td>
<td><span class="synthesis-name-cn">HP奖球提升</span><span class="synthesis-name-ja" lang="ja">ＨＰプライズアップ</span><span class="synthesis-name-en" lang="en">HP Prize Plus</span></td>
<td><span class="synthesis-name-cn">链接奖球提升</span><span class="synthesis-name-ja" lang="ja">リンクプライズアップ</span><span class="synthesis-name-en" lang="en">Link Prize Plus</span></td>
<td>随机</td>
<td>随机</td>
</tr>
<tr>
<th scope="row" id="ability-row-d">D</th>
<td><span class="synthesis-name-cn">火焰防护</span><span class="synthesis-name-ja" lang="ja">ファイアガード</span><span class="synthesis-name-en" lang="en">Fire Screen</span></td>
<td><span class="synthesis-name-cn">攻击加速</span><span class="synthesis-name-ja" lang="ja">アタックヘイスト</span><span class="synthesis-name-en" lang="en">Attack Haste</span></td>
<td><span class="synthesis-name-cn">绿叶庇护</span><span class="synthesis-name-ja" lang="ja">リーフベール</span><span class="synthesis-name-en" lang="en">Leaf Bracer</span></td>
<td><span class="synthesis-name-cn">连击加成</span><span class="synthesis-name-ja" lang="ja">コンボプラス</span><span class="synthesis-name-en" lang="en">Combo Plus</span></td>
<td><span class="synthesis-name-cn">HP提升</span><span class="synthesis-name-ja" lang="ja">ＨＰアップ</span><span class="synthesis-name-en" lang="en">HP Boost</span></td>
<td><span class="synthesis-name-cn">HP奖球提升</span><span class="synthesis-name-ja" lang="ja">ＨＰプライズアップ</span><span class="synthesis-name-en" lang="en">HP Prize Plus</span></td>
<td><span class="synthesis-name-cn">链接奖球提升</span><span class="synthesis-name-ja" lang="ja">リンクプライズアップ</span><span class="synthesis-name-en" lang="en">Link Prize Plus</span></td>
<td>随机</td>
<td>随机</td>
</tr>
<tr class="synthesis-spacer"><td colspan="10"></td></tr>
<tr>
<th scope="row" id="ability-row-e">E</th>
<td><span class="synthesis-name-cn">冰雪提升</span><span class="synthesis-name-ja" lang="ja">ブリザドアップ</span><span class="synthesis-name-en" lang="en">Blizzard Boost</span></td>
<td><span class="synthesis-name-cn">魔法加速</span><span class="synthesis-name-ja" lang="ja">マジックヘイスト</span><span class="synthesis-name-en" lang="en">Magic Haste</span></td>
<td><span class="synthesis-name-cn">绿叶庇护</span><span class="synthesis-name-ja" lang="ja">リーフベール</span><span class="synthesis-name-en" lang="en">Leaf Bracer</span></td>
<td><span class="synthesis-name-cn">连击加成</span><span class="synthesis-name-ja" lang="ja">コンボプラス</span><span class="synthesis-name-en" lang="en">Combo Plus</span></td>
<td><span class="synthesis-name-cn">道具提升</span><span class="synthesis-name-ja" lang="ja">アイテムアップ</span><span class="synthesis-name-en" lang="en">Item Boost</span></td>
<td><span class="synthesis-name-cn">HP奖球提升</span><span class="synthesis-name-ja" lang="ja">ＨＰプライズアップ</span><span class="synthesis-name-en" lang="en">HP Prize Plus</span></td>
<td><span class="synthesis-name-cn">幸运提升</span><span class="synthesis-name-ja" lang="ja">ラックアップ</span><span class="synthesis-name-en" lang="en">Lucky Strike</span></td>
<td>随机</td>
<td>随机</td>
</tr>
<tr>
<th scope="row" id="ability-row-f">F</th>
<td><span class="synthesis-name-cn">冰雪提升</span><span class="synthesis-name-ja" lang="ja">ブリザドアップ</span><span class="synthesis-name-en" lang="en">Blizzard Boost</span></td>
<td><span class="synthesis-name-cn">装填增强</span><span class="synthesis-name-ja" lang="ja">リロードブースト</span><span class="synthesis-name-en" lang="en">Reload Boost</span></td>
<td><span class="synthesis-name-cn">绝处逢生</span><span class="synthesis-name-ja" lang="ja">ラストリーヴ</span><span class="synthesis-name-en" lang="en">Second Chance</span></td>
<td><span class="synthesis-name-cn">空中连击加成</span><span class="synthesis-name-ja" lang="ja">エアコンボプラス</span><span class="synthesis-name-en" lang="en">Air Combo Plus</span></td>
<td><span class="synthesis-name-cn">受伤汲取</span><span class="synthesis-name-ja" lang="ja">ダメージアスピル</span><span class="synthesis-name-en" lang="en">Damage Syphon</span></td>
<td><span class="synthesis-name-cn">HP奖球提升</span><span class="synthesis-name-ja" lang="ja">ＨＰプライズアップ</span><span class="synthesis-name-en" lang="en">HP Prize Plus</span></td>
<td><span class="synthesis-name-cn">幸运提升</span><span class="synthesis-name-ja" lang="ja">ラックアップ</span><span class="synthesis-name-en" lang="en">Lucky Strike</span></td>
<td>随机</td>
<td>随机</td>
</tr>
<tr>
<th scope="row" id="ability-row-g">G</th>
<td><span class="synthesis-name-cn">冰雪防护</span><span class="synthesis-name-ja" lang="ja">ブリザドガード</span><span class="synthesis-name-en" lang="en">Blizzard Screen</span></td>
<td><span class="synthesis-name-cn">攻击加速</span><span class="synthesis-name-ja" lang="ja">アタックヘイスト</span><span class="synthesis-name-en" lang="en">Attack Haste</span></td>
<td><span class="synthesis-name-cn">绿叶庇护</span><span class="synthesis-name-ja" lang="ja">リーフベール</span><span class="synthesis-name-en" lang="en">Leaf Bracer</span></td>
<td><span class="synthesis-name-cn">空中连击加成</span><span class="synthesis-name-ja" lang="ja">エアコンボプラス</span><span class="synthesis-name-en" lang="en">Air Combo Plus</span></td>
<td><span class="synthesis-name-cn">道具提升</span><span class="synthesis-name-ja" lang="ja">アイテムアップ</span><span class="synthesis-name-en" lang="en">Item Boost</span></td>
<td><span class="synthesis-name-cn">HP奖球提升</span><span class="synthesis-name-ja" lang="ja">ＨＰプライズアップ</span><span class="synthesis-name-en" lang="en">HP Prize Plus</span></td>
<td><span class="synthesis-name-cn">幸运提升</span><span class="synthesis-name-ja" lang="ja">ラックアップ</span><span class="synthesis-name-en" lang="en">Lucky Strike</span></td>
<td>随机</td>
<td>随机</td>
</tr>
<tr>
<th scope="row" id="ability-row-h">H</th>
<td><span class="synthesis-name-cn">冰雪防护</span><span class="synthesis-name-ja" lang="ja">ブリザドガード</span><span class="synthesis-name-en" lang="en">Blizzard Screen</span></td>
<td><span class="synthesis-name-cn">魔法加速</span><span class="synthesis-name-ja" lang="ja">マジックヘイスト</span><span class="synthesis-name-en" lang="en">Magic Haste</span></td>
<td><span class="synthesis-name-cn">连击终结提升</span><span class="synthesis-name-ja" lang="ja">コンボＦアップ</span><span class="synthesis-name-en" lang="en">Combo F Boost</span></td>
<td><span class="synthesis-name-cn">空中连击加成</span><span class="synthesis-name-ja" lang="ja">エアコンボプラス</span><span class="synthesis-name-en" lang="en">Air Combo Plus</span></td>
<td><span class="synthesis-name-cn">道具提升</span><span class="synthesis-name-ja" lang="ja">アイテムアップ</span><span class="synthesis-name-en" lang="en">Item Boost</span></td>
<td><span class="synthesis-name-cn">HP奖球提升</span><span class="synthesis-name-ja" lang="ja">ＨＰプライズアップ</span><span class="synthesis-name-en" lang="en">HP Prize Plus</span></td>
<td><span class="synthesis-name-cn">EXP漫步</span><span class="synthesis-name-ja" lang="ja">ＥＸＰウォーク</span><span class="synthesis-name-en" lang="en">EXP Walker</span></td>
<td>随机</td>
<td>随机</td>
</tr>
<tr class="synthesis-spacer"><td colspan="10"></td></tr>
<tr>
<th scope="row" id="ability-row-i">I</th>
<td><span class="synthesis-name-cn">雷电提升</span><span class="synthesis-name-ja" lang="ja">サンダーアップ</span><span class="synthesis-name-en" lang="en">Thunder Boost</span></td>
<td><span class="synthesis-name-cn">魔法加速</span><span class="synthesis-name-ja" lang="ja">マジックヘイスト</span><span class="synthesis-name-en" lang="en">Magic Haste</span></td>
<td><span class="synthesis-name-cn">连击终结提升</span><span class="synthesis-name-ja" lang="ja">コンボＦアップ</span><span class="synthesis-name-en" lang="en">Combo F Boost</span></td>
<td><span class="synthesis-name-cn">空中连击加成</span><span class="synthesis-name-ja" lang="ja">エアコンボプラス</span><span class="synthesis-name-en" lang="en">Air Combo Plus</span></td>
<td><span class="synthesis-name-cn">HP提升</span><span class="synthesis-name-ja" lang="ja">ＨＰアップ</span><span class="synthesis-name-en" lang="en">HP Boost</span></td>
<td><span class="synthesis-name-cn">吸引</span><span class="synthesis-name-ja" lang="ja">ドロー</span><span class="synthesis-name-en" lang="en">Treasure Magnet</span></td>
<td><span class="synthesis-name-cn">链接奖球提升</span><span class="synthesis-name-ja" lang="ja">リンクプライズアップ</span><span class="synthesis-name-en" lang="en">Link Prize Plus</span></td>
<td>随机</td>
<td>随机</td>
</tr>
<tr>
<th scope="row" id="ability-row-j">J</th>
<td><span class="synthesis-name-cn">雷电提升</span><span class="synthesis-name-ja" lang="ja">サンダーアップ</span><span class="synthesis-name-en" lang="en">Thunder Boost</span></td>
<td><span class="synthesis-name-cn">装填增强</span><span class="synthesis-name-ja" lang="ja">リロードブースト</span><span class="synthesis-name-en" lang="en">Reload Boost</span></td>
<td><span class="synthesis-name-cn">连击终结提升</span><span class="synthesis-name-ja" lang="ja">コンボＦアップ</span><span class="synthesis-name-en" lang="en">Combo F Boost</span></td>
<td><span class="synthesis-name-cn">连击生还</span><span class="synthesis-name-ja" lang="ja">コンボリーヴ</span><span class="synthesis-name-en" lang="en">Once More</span></td>
<td><span class="synthesis-name-cn">防御者</span><span class="synthesis-name-ja" lang="ja">ディフェンダー</span><span class="synthesis-name-en" lang="en">Defender</span></td>
<td><span class="synthesis-name-cn">吸引</span><span class="synthesis-name-ja" lang="ja">ドロー</span><span class="synthesis-name-en" lang="en">Treasure Magnet</span></td>
<td><span class="synthesis-name-cn">EXP良机</span><span class="synthesis-name-ja" lang="ja">ＥＸＰチャンス</span><span class="synthesis-name-en" lang="en">EXP Chance</span></td>
<td>随机</td>
<td>随机</td>
</tr>
<tr>
<th scope="row" id="ability-row-k">K</th>
<td><span class="synthesis-name-cn">雷电防护</span><span class="synthesis-name-ja" lang="ja">サンダーガード</span><span class="synthesis-name-en" lang="en">Thunder Screen</span></td>
<td><span class="synthesis-name-cn">攻击加速</span><span class="synthesis-name-ja" lang="ja">アタックヘイスト</span><span class="synthesis-name-en" lang="en">Attack Haste</span></td>
<td><span class="synthesis-name-cn">指令终结提升</span><span class="synthesis-name-ja" lang="ja">コマンドＦアップ</span><span class="synthesis-name-en" lang="en">Finish Boost</span></td>
<td><span class="synthesis-name-cn">连击加成</span><span class="synthesis-name-ja" lang="ja">コンボプラス</span><span class="synthesis-name-en" lang="en">Combo Plus</span></td>
<td><span class="synthesis-name-cn">HP提升</span><span class="synthesis-name-ja" lang="ja">ＨＰアップ</span><span class="synthesis-name-en" lang="en">HP Boost</span></td>
<td><span class="synthesis-name-cn">吸引</span><span class="synthesis-name-ja" lang="ja">ドロー</span><span class="synthesis-name-en" lang="en">Treasure Magnet</span></td>
<td><span class="synthesis-name-cn">链接奖球提升</span><span class="synthesis-name-ja" lang="ja">リンクプライズアップ</span><span class="synthesis-name-en" lang="en">Link Prize Plus</span></td>
<td>随机</td>
<td>随机</td>
</tr>
<tr>
<th scope="row" id="ability-row-l">L</th>
<td><span class="synthesis-name-cn">雷电防护</span><span class="synthesis-name-ja" lang="ja">サンダーガード</span><span class="synthesis-name-en" lang="en">Thunder Screen</span></td>
<td><span class="synthesis-name-cn">攻击加速</span><span class="synthesis-name-ja" lang="ja">アタックヘイスト</span><span class="synthesis-name-en" lang="en">Attack Haste</span></td>
<td><span class="synthesis-name-cn">指令终结提升</span><span class="synthesis-name-ja" lang="ja">コマンドＦアップ</span><span class="synthesis-name-en" lang="en">Finish Boost</span></td>
<td><span class="synthesis-name-cn">连击加成</span><span class="synthesis-name-ja" lang="ja">コンボプラス</span><span class="synthesis-name-en" lang="en">Combo Plus</span></td>
<td><span class="synthesis-name-cn">HP提升</span><span class="synthesis-name-ja" lang="ja">ＨＰアップ</span><span class="synthesis-name-en" lang="en">HP Boost</span></td>
<td><span class="synthesis-name-cn">吸引</span><span class="synthesis-name-ja" lang="ja">ドロー</span><span class="synthesis-name-en" lang="en">Treasure Magnet</span></td>
<td><span class="synthesis-name-cn">幸运提升</span><span class="synthesis-name-ja" lang="ja">ラックアップ</span><span class="synthesis-name-en" lang="en">Lucky Strike</span></td>
<td>随机</td>
<td>随机</td>
</tr>
<tr class="synthesis-spacer"><td colspan="10"></td></tr>
<tr>
<th scope="row" id="ability-row-m">M</th>
<td><span class="synthesis-name-cn">恢复提升</span><span class="synthesis-name-ja" lang="ja">ケアルアップ</span><span class="synthesis-name-en" lang="en">Cure Boost</span></td>
<td><span class="synthesis-name-cn">魔法加速</span><span class="synthesis-name-ja" lang="ja">マジックヘイスト</span><span class="synthesis-name-en" lang="en">Magic Haste</span></td>
<td><span class="synthesis-name-cn">连击终结提升</span><span class="synthesis-name-ja" lang="ja">コンボＦアップ</span><span class="synthesis-name-en" lang="en">Combo F Boost</span></td>
<td><span class="synthesis-name-cn">连击加成</span><span class="synthesis-name-ja" lang="ja">コンボプラス</span><span class="synthesis-name-en" lang="en">Combo Plus</span></td>
<td><span class="synthesis-name-cn">道具提升</span><span class="synthesis-name-ja" lang="ja">アイテムアップ</span><span class="synthesis-name-en" lang="en">Item Boost</span></td>
<td><span class="synthesis-name-cn">吸引</span><span class="synthesis-name-ja" lang="ja">ドロー</span><span class="synthesis-name-en" lang="en">Treasure Magnet</span></td>
<td><span class="synthesis-name-cn">幸运提升</span><span class="synthesis-name-ja" lang="ja">ラックアップ</span><span class="synthesis-name-en" lang="en">Lucky Strike</span></td>
<td>随机</td>
<td>随机</td>
</tr>
<tr>
<th scope="row" id="ability-row-n">N</th>
<td><span class="synthesis-name-cn">恢复提升</span><span class="synthesis-name-ja" lang="ja">ケアルアップ</span><span class="synthesis-name-en" lang="en">Cure Boost</span></td>
<td><span class="synthesis-name-cn">装填增强</span><span class="synthesis-name-ja" lang="ja">リロードブースト</span><span class="synthesis-name-en" lang="en">Reload Boost</span></td>
<td><span class="synthesis-name-cn">绝处逢生</span><span class="synthesis-name-ja" lang="ja">ラストリーヴ</span><span class="synthesis-name-en" lang="en">Second Chance</span></td>
<td><span class="synthesis-name-cn">连击加成</span><span class="synthesis-name-ja" lang="ja">コンボプラス</span><span class="synthesis-name-en" lang="en">Combo Plus</span></td>
<td><span class="synthesis-name-cn">防御者</span><span class="synthesis-name-ja" lang="ja">ディフェンダー</span><span class="synthesis-name-en" lang="en">Defender</span></td>
<td><span class="synthesis-name-cn">吸引</span><span class="synthesis-name-ja" lang="ja">ドロー</span><span class="synthesis-name-en" lang="en">Treasure Magnet</span></td>
<td><span class="synthesis-name-cn">幸运提升</span><span class="synthesis-name-ja" lang="ja">ラックアップ</span><span class="synthesis-name-en" lang="en">Lucky Strike</span></td>
<td>随机</td>
<td>随机</td>
</tr>
<tr class="synthesis-spacer"><td colspan="10"></td></tr>
<tr>
<th scope="row" id="ability-row-o">O</th>
<td><span class="synthesis-name-cn">黑暗防护</span><span class="synthesis-name-ja" lang="ja">ダークガード</span><span class="synthesis-name-en" lang="en">Dark Screen</span></td>
<td><span class="synthesis-name-cn">攻击加速</span><span class="synthesis-name-ja" lang="ja">アタックヘイスト</span><span class="synthesis-name-en" lang="en">Attack Haste</span></td>
<td><span class="synthesis-name-cn">指令终结提升</span><span class="synthesis-name-ja" lang="ja">コマンドＦアップ</span><span class="synthesis-name-en" lang="en">Finish Boost</span></td>
<td><span class="synthesis-name-cn">空中连击加成</span><span class="synthesis-name-ja" lang="ja">エアコンボプラス</span><span class="synthesis-name-en" lang="en">Air Combo Plus</span></td>
<td><span class="synthesis-name-cn">道具提升</span><span class="synthesis-name-ja" lang="ja">アイテムアップ</span><span class="synthesis-name-en" lang="en">Item Boost</span></td>
<td><span class="synthesis-name-cn">吸引</span><span class="synthesis-name-ja" lang="ja">ドロー</span><span class="synthesis-name-en" lang="en">Treasure Magnet</span></td>
<td><span class="synthesis-name-cn">幸运提升</span><span class="synthesis-name-ja" lang="ja">ラックアップ</span><span class="synthesis-name-en" lang="en">Lucky Strike</span></td>
<td>随机</td>
<td>随机</td>
</tr>
<tr>
<th scope="row" id="ability-row-p">P</th>
<td><span class="synthesis-name-cn">黑暗防护</span><span class="synthesis-name-ja" lang="ja">ダークガード</span><span class="synthesis-name-en" lang="en">Dark Screen</span></td>
<td><span class="synthesis-name-cn">魔法加速</span><span class="synthesis-name-ja" lang="ja">マジックヘイスト</span><span class="synthesis-name-en" lang="en">Magic Haste</span></td>
<td><span class="synthesis-name-cn">连击终结提升</span><span class="synthesis-name-ja" lang="ja">コンボＦアップ</span><span class="synthesis-name-en" lang="en">Combo F Boost</span></td>
<td><span class="synthesis-name-cn">空中连击加成</span><span class="synthesis-name-ja" lang="ja">エアコンボプラス</span><span class="synthesis-name-en" lang="en">Air Combo Plus</span></td>
<td><span class="synthesis-name-cn">道具提升</span><span class="synthesis-name-ja" lang="ja">アイテムアップ</span><span class="synthesis-name-en" lang="en">Item Boost</span></td>
<td><span class="synthesis-name-cn">吸引</span><span class="synthesis-name-ja" lang="ja">ドロー</span><span class="synthesis-name-en" lang="en">Treasure Magnet</span></td>
<td><span class="synthesis-name-cn">EXP漫步</span><span class="synthesis-name-ja" lang="ja">ＥＸＰウォーク</span><span class="synthesis-name-en" lang="en">EXP Walker</span></td>
<td>随机</td>
<td>随机</td>
</tr>
</table>
</div>
</section>
