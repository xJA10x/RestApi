
// Notes:
  // package.json only holds our dependecies
    // Packages that we are going to get from the internet.

  // Working with express is easy because it allows us to create routes(endpoints) to work
  // with the database..

  // Middleware is small function
  // that executes when an you direct it to an expecific route.
  // This function will run whenever we use the post router.
  // For example,
    // with middleware we can do authentication.

  // Four CRUD operations,
    // Create(POST), Read(GET), Update(PATCH), Delete(DEL)

  // MongoDB is a document type
  // that doesnt have relations.
  // Imagine it being this big object that is storing a lot of
  // information, that way you don't have relations between tables.
  // Moongose npm package makes connecting to the database a lot easier.

  // Postman allows us to test our api by testing our endpoint to
  // make sure data is going and coming back from the database.

// Imports express npm module.
const express = require('express');
// Initializes express app(executes).
const app = express();
// Function call.
// Takes one parameter,
// loads mongoose npm library.
// Stores output in the variable mongoose.
const mongoose = require('mongoose');
// Imports package to parse response to json.
const bodyParser = require('body-parser');

// Import Routes.
const postsRoute = require('./routes/posts');

// Creates middleware.
// Every time a request is made,
// this middleware will run.
app.use(bodyParser.json());
// Creates middleware.
app.use('/posts', postsRoute);

// Connects to database.
mongoose.connect('mongodb://127.0.0.1:27017/rest',

  {useNewUrlParser: true},

    () => {

      console.log("Connected to DB!")

});

// Builds server to litsen for request at a
// given port.
// Takes one parameter,
// the port that you want to litsening to the server.
app.listen(3000);
