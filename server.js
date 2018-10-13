// Dependencies
const express = require("express")
const routes = require("./routes");
const mongoose = require("mongoose")
var app = express();
// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
var dbConfig = require('./db.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);
// app.use(express.static("public"));
const PORT = process.env.PORT || 3001;


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dorisrx");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
  console.log("hey");
});


// Initialize Express


// Set up a static folder (public) for our web app



// This makes sure that any errors are logged if mongodb runs into an issue


  
  // 2. At the "/all" path, display every entry in the animals collection
// app.get("/all", function(req, res) {
//     // Query: In our database, go to the drugs collection, then "find" everything
//     db.drugs.find({}, function(error, found) {
//       // Log any errors if the server encounters one
//       if (error) {
//         console.log(error);
//       }
//       // Otherwise, send the result of this query to the browser
//       else {
//         res.json(found);
//       }
//     });
//   });