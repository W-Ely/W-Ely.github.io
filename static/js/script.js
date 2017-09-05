'use strict';

// Senna related
var app = new senna.App();
app.setBasePath('/');
app.addRoutes([
  {
    path: '/index.html',
    handler: senna.HtmlScreen
  },
  {
    path: '/services.html',
    handler: senna.HtmlScreen
  },
  {
    path: '/contact.html',
    handler: senna.HtmlScreen
  }
]);

// Jquery Tab class manipulation
$(document).ready(function() {
	//jquery
    $(location).attr('href');

	//pure javascript
	var pathname = window.location.pathname;

	// to show it in an alert window
    alert(window.location);
});
