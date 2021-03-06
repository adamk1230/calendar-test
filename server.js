// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Click schema
var Group = require("./models/group");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3001;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("build"));

// -------------------------------------------------
mongoose.connect("mongodb://localhost/Calander-Test");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/build/static/index.html");
});

app.get("/api/:id", function(req, res) {
	Group.findOne({_id: req.params.id}).exec(function(err, doc) {
		if (err) {
			console.log(err)
		}
		else {
			console.log(doc)
			res.send(doc)
		}
	})
})


// app.post("/api", function(req, res) {
// 	console.log("Made it to the post route!")
// 	console.log(req.body)
// 	var newEvent = new Event(req.body);

// 	newEvent.save(function(err, doc) {
// 		if (err) {
// 			console.log(err)
// 		}
// 		else {
// 			res.send(doc)
// 		}
// 	})
// })

app.post("/event/:id", function(req, res) {
	console.log("Made it to the event post route!")
	console.log(req.body)
	Group.findOneAndUpdate({_id: req.params.id},
	{
		$push: {events: req.body}
	}, function(err, doc) {
		if (err) {
			console.log(err)
		}
		else {
			res.send(doc)
		}
	})


})

app.post("/group", function(req, res) {
	console.log("Made it to the group post route!")
	console.log(req.body)
	var newGroup = new Group(req.body);

	newGroup.save(function(err, doc) {
		if (err) {
			console.log(err)
		}
		else {
			res.send(doc)
		}
	})
})


// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
