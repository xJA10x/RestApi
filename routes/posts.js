// Imports express npm module.
const express = require('express');

// Allows to create routes in seperate files.
const router = express.Router();

// Creates router.
// Takes two parameters,
// the route that we want to go to and the route handler.
router.get('/', (req, res) => {

  // Sends back response.
  res.send("We are on posts")

});

// Exports router
// so that other modules have access to it.
module.exports = router;
