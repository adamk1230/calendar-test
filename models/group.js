// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var GroupSchema = new Schema({
  groupName: {
    type: String
  },
  groupDescription: {
    type: String
  },
  groupMembers: [],
  events: [{
  	title: String,
  	start: String,
  	end: String
  }]
});

// Create the Model
var Group = mongoose.model("Group", GroupSchema);

// Export it for use elsewhere
module.exports = Group;