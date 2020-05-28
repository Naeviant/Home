// Module Imports
var express = require("express"),
    session = require("express-session"),
    expressNunjucks = require("express-nunjucks"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    config = require("./config.json");

// Setup Express App
var app = express();

// Configure Templating Engine
var njk = expressNunjucks(app, {
    watch: true,
    noCache: true
});

// Configure Express App
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/pub"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: config.app.secret,
    resave: false,
    saveUninitialized: false
}));

// Session Local Variables
app.get("*", function(req, res, next) {
    res.locals = req.session;
    next();
});

// Render Game
app.get("/", function(req, res) {
    res.render("index");
});

// Handle Error 404s
app.get("*", function(req, res) {
    res.redirect("/");
});

// Run Server
var server = app.listen(config.app.port, function() {
    // Send Startup Message to Console
    console.log("Application Running - Port " + config.app.port);
});