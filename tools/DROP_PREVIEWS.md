# 物品掉落来源与概率查询

正式文章为 `source/_posts/bbs-drops-items.md`，使用现有 Hexo＋Butterfly 模板，地址为 `/posts/bbs-drops-items/`。普通 `npm run build` 会生成文章并收录到首页、分类和站内搜索。其余三种候选文章及调查下载附件已删除。

## 数据与重建

文章收录104种物品、277条原始掉落条件。数据保存在正文中，浏览器脚本直接筛选、分页和展开，不维护另一份掉落表。原始调查包仍保留在用户提供的 `D:/敌人掉落反向索引/khbbsfm-drop-database.zip`；生成器只读取CSV／JSON，不执行包内脚本，也不复制附件到网站。

```powershell
python -X utf8 tools/build-drop-previews.py
npm run build
```

可用 `--source-zip <路径>` 指定原始包。生成器仅生成正式文章，不会创建其他候选或推送Git。AI辅助整理声明、四个来源网址、原始概率、争议标记及每条资料来源一并保留。

`tools/drop-preview-names.json` 保存补丁1.1.2对应的工作簿摘要、日文原名、中文译名与资源键，覆盖104种物品和全部27种有掉落资料的敌人。`tools/drop-preview-worlds.json` 保存27种敌人的BBS分角色出现世界、修订来源及商店等级1～8的剧情条件。普通站点构建直接使用生成后的文章，无需原始调查包、工作簿、联网或Python。

出现世界仅取KHWiki的BBS数据，按角色保留对应关系。斗技大会、黑暗世界篇章和奖励罐材料的明确地点优先；不会因增加世界而复制掉落条件或改变概率。更换正式补丁译名来源后，使用项目现有工作簿导出器重新匹配日文名称；生成器会核对本地补丁基线与译名映射是否一致。

需要刷新资料时：

```powershell
python -X utf8 tools/sync-drop-worlds.py --refresh
python -X utf8 tools/sync-drop-preview-names.py
python -X utf8 tools/build-drop-previews.py
```

世界同步不带 `--refresh` 时使用 `BBSFM/work/cache/blog-drop-previews/wiki-appearance-input.json` 中的相关字段缓存；`--check` 只读校验缓存与已保存JSON是否一致。译名同步临时导出集中在 `work/runs/`，默认在finally清理，可用 `--keep-work` 保留诊断。

## 本地验证

```powershell
./tools/Build-DropPreviews.ps1
python -m http.server 5001 --bind 127.0.0.1 --directory ../work/cache/blog-drop-previews/public
node tools/check-drop-previews.cjs
```

预览入口为 `http://127.0.0.1:5001/posts/bbs-drops-items/`，同样关闭草稿渲染。构建入口先清理专用缓存输出，再生成站点；数据库与合并配置隔离在 `work/cache/blog-drop-previews/hexo/`，并在finally恢复博客根目录原有 `_multiconfig.yml`。

浏览器检查覆盖正式标题、资料声明、104／277条目数、三语言查询、角色／世界／商店等级交集、材料地点、来源、分页、直接定位、首页及重复PJAX进入、390px手机布局、深色模式和已删除页面／附件的404。仅使用独立Chrome配置与本地服务；临时文件位于 `work/runs/` 并在finally清理，可用 `--keep-work` 保留诊断。

文章资源为 `source/css/drop-previews.css`、`source/js/drop-previews.js` 与 `scripts/drop-preview-assets.js`。样式受文章作用域限制，共享加载支持从首页经PJAX进入查询文章。