hexo.extend.filter.register('after_render:html', function (html) {
  const root = this.config.root || '/';
  const href = `${root.replace(/\/$/, '')}/css/custom.css`.replace(/^\/\//, '/');
  return html.replace('</head>', `<link rel="stylesheet" href="${href}"></head>`);
});
