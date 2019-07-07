var express = require("express");
var expressHandlebars = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
var request = require("request");
var cheerio = require("cheerio");

// set my port
var PORT = process.env.PORT || 8000;

// initialize express app
var app = express();

// express router
var router = express.Router();

// sets public folder as static directory
app.use(express.static(__dirname + "/public"));

// initiates body parser for app
app.use(bodyParser.urlencoded({
    extended: false
}));

// passes all requests through router middleware
app.use(router);

// connects hdb to express app
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");



var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/any-name-will-do";

mongoose.connect(MONGODB_URI);







app.listen(PORT, function() {
  console.log("Running on port: " + PORT);
});