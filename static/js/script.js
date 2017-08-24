'use strict';
var app = new senna.App();
app.setBasePath('/');
app.addRoutes([
  {
    path: '/index.html',
    handler: senna.HtmlScreen
  },
  {
    path: '/foo.html',
    handler: senna.HtmlScreen
  },
  {
    path: '/bar.html',
    handler: senna.HtmlScreen
  }
]);
