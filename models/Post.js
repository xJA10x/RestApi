// Notes:
  // A schema represents how that post looks.
  // It describes how the data looks.

// Imports moongose module.
const mongoose = require('mongoose');

// Builds schema.
// Takes one parameter,
// an object.
const PostSchema = mongoose.Schema({

  // Builds object.
  title: {

    // Describes properties
    type: String,
    required: true

  },
  description: {

    type: String,
    required: true

  },
  date: {

    type: Date,
    default: Date.now

  }

});
