// Require express
var express = require("express");

// Set up express
var app = express();
var PORT = process.env.PORT || 8080;

// Set up data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoutes.js")(app);

// Start server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  