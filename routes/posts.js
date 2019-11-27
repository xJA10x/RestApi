// Imports express npm module.
const express = require('express');
// Allows express to create routes in seperate files.
const router = express.Router();
// Imports model.
const Post = require('../models/Post');

// Creates router.
// Takes two parameters,
// the route that we want to go to and the route handler.
// ENDPOINT FOR GETTING BACK ALL THE POST
router.get('/', async (req, res) => {

  try {

    // Returns all posts.
    const posts = await Post.find()
    res.json(posts)

  } catch(err) {

    res.json({message:err})

  }

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

// ENDPOINT FOR GETTING SPECIFIC POST.
router.get('/:postId', async (req, res) => {

  try {

    const post = await Post.findById(req.params.postId)

    // Sends back response.
    res.json(post)

  } catch(err) {

    res.json({message: err})

  }

});

// Endpoint for deleting specific post.
router.delete('/:postId', async (req, res) => {

  try {

    // Method takes one parameter,
    // an object to search by specific criteria.
    const removedPost = await Post.remove({

      _id: req.params.postId

    })

    res.json(removedPost)

  } catch(err) {

    res.json({message: err})

  }

});

// Exports router
// so that other modules have access to it.
module.exports = router;
