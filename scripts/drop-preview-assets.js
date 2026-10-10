// Shared scoped styles for the published item-drop article.
hexo.extend.filter.register('after_render:html', function (html) {
  const root = (this.config.root || '/').replace(/\/$/, '');
  // A shared, scoped sheet also works when entering the article from the homepage
  // through PJAX. Its selectors never apply to ordinary articles.
  return html.replace('</head>', `<link rel="stylesheet" href="${root}/css/drop-previews.css"></head>`);
});
