// Imports express npm module.
const express = require('express');
// Allows express to create routes in seperate files.
const router = express.Router();
// Imports model.
const Post = require('../models/Post');

// Creates router.
// Takes two parameters,
// the route that we want to go to and the route handler.
router.get('/', (req, res) => {

  // Sends back response.
  res.send("We are on posts")

});

// Endpoint for posting to the database.
router.post('/',  async (req, res) => {

  // Creates new post.
  // Takes one parameter,
  // an object.
  const post = new Post({

    title: req.body.title,
    description: req.body.description

  })

  try {

    // Saves to database.
    const savedPost = await post.save()

    // Sends back response.
    res.json(savedPost)

  } catch(err) {

    res.json({message:err})

  }

});

// Exports router
// so that other modules have access to it.
module.exports = router;
