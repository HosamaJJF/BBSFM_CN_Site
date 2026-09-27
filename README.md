# BBSFM简体中文汉化计划 Hexo 博客

这是一个使用 Hexo 与 Butterfly 主题的静态博客。文章使用 Markdown 编写，Cloudflare Pages 会在源码推送后自动生成和发布网站。

## 本地预览

```powershell
cd BBSFM\blog
npm install
npm run server
```

打开终端显示的本地地址即可预览。

## 发布一篇新的补丁文章

```powershell
npm run new:release -- "BBSFM 简体中文补丁 1.0.4"
```

然后编辑 `source/_posts/` 中新生成的 Markdown 文件。版本、文件名、SHA-256、下载地址、更新内容和已知问题均在文章中直接修改。

## 修改友情链接

编辑 `source/_data/link.yml`。复制一项 `name / link / avatar / descr`，替换成其他汉化作者的实际信息即可。

## 修改站点外观

- 站点与 Hexo 配置：`_config.yml`
- Butterfly 配置：`_config.butterfly.yml`
- 少量自定义样式：`source/css/custom.css`
- 首页横幅：`source/img/kh-blog-hero.png`
- BBSFM 文章封面：`source/img/bbsfm-release-cover.png`

## Cloudflare Pages

Cloudflare Pages 连接本仓库后，使用以下构建设置：

```text
Production branch: main
Build command: npm run build
Build output directory: public
Node.js version: 22
```

推送到 `main` 后，Cloudflare Pages 会自动构建并发布到 `https://bbsfmcn.hosamajjf.com`。
