"use strict";
var React = require("react");
var Router = require("react-router");
var express = require("express");
var app = express();

var ASSET_URL = process.env.ASSET_URL || "/assets";

// prepare to import jsx modules
require("node-jsx").install({ harmony: true });

// store
var ApplicationStore = require("./client/jsx/store/application_store.jsx");
// setup data store
var store = new ApplicationStore();
// TEMP set fixtures
store.setupGeneFixtures();
// 
// store.setupGeneFixtures();
// define routes
var routes = require("./client/jsx/routes.jsx");

// react middleware
var renderReactApplication = function (req, res, next) {
	var headHtmlString = 
		"<head>" +
			"<title>Human Portal</title>" + 
		    "<link href='https://fonts.googleapis.com/css?family=Lato:400,700|Droid+Serif:400,700' rel='stylesheet' type='text/css'>" +
			"<link rel='stylesheet' type='text/css' href='" + ASSET_URL + "/css/bootstrap.min.css'>" +
			"<link rel='stylesheet' type='text/css' href='" + ASSET_URL + "/css/sgd.css'>" +
		"</head>";
	// run application with defined routes, current route, pass it store as property
	return Router.run(routes, req.originalUrl, function (Handler) {
		var appHTMLString = React.renderToStaticMarkup(React.createElement(Handler, { store: store }));
		var browserBuildUrl = ASSET_URL + "/js/application.js"
		var htmlString = "<!doctype html><html>" + headHtmlString + "<body><div id='j-application'>" + appHTMLString + "</div><script src='" + browserBuildUrl + "'></script></body></html>";
		return res.send(htmlString);
	}); 
};


// static assets if not in production
if (process.env.ENV !== "PRODUCTION") {
	app.use("/assets", express.static("build"));
}

app.get("*", renderReactApplication);

module.exports = app;
