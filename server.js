// Require our dependencies
var express = require("express");
var bodyParser = require("body-parser");
var expressHandlebars = require("express-handlebars");
var mongoose = require("mongoose");
// Set up our port to be either the host's designated port, or 3000
var port = process.env.PORT || 3000;

// Instantiate our Express app
var app = express();

mongoose.Promise = Promise;

// Set up an Express Router
var router = express.Router();

//Require our routes file pass our router object
require("./config/routes")(router);

// Designate our public folder as static directory
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "views"));
// Connect Handlebars to our Express app
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use bodyParser in our app
app.use(bodyParser.urlencoded({
  extended: false
}));

// If deployed, use the deployed databse otherwise  use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect mongoose to our database
mongoose.connect(db, function(error){
    if (error){
        console.log("Mongoose Error: ", error);
    }else{
        console.log("Mongoose connection is successful.");
    }
})

// Have every request go through our router middleware
app.use(router);

// Listen on the port
app.listen(port, function() {
  console.log("App running on port: %s", port);
});