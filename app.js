
// Notes:
  // Working with express is easy because it allows us to create routes.

  // Middleware is small function
  // that executes when an you direct it to an expecific route.
  // This function will run whenever we use the post router.
  // For example,
    // with middleware we can do authentication.

  // MongoDB is a document type
  // that doesnt have relantions.
  // Imagine it being this big  that is storing a lot of
  // information, so you don't have relations between tables.
  // Moongose npm module makes connecting to the database a lot easire.




// Imports express npm module.
const express = require('express');

// Initializes express app(executes).
const app = express();

// Routes(enpoints)
// Takes one parameter,
// the route that we want to go to.
app.get('/', (req, res) => {

  // Sends back response.
  res.send("We are on home");

});

app.get('/posts', (req, res) => {

  // Sends back response.
  res.send("We are on posts");

});


// Builds server to litsen for request at a
// given port.
// Takes one parameter,
// the port that you want to litsen.
app.listen(3000);
