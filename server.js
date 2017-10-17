const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const exphbs = require("express-handlebars");
const routes = require("./controllers/controller.js");

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });