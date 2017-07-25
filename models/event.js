// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var EventsSchema = new Schema({
  title: {
    type: String
  },
  allDay: {
  	type: Boolean
  },
  start: {
    type: String
  },
  end: {
  	type: String
  }
});

// Create the Model
var Event = mongoose.model("Event", EventSchema);

// Export it for use elsewhere
module.exports = Event;