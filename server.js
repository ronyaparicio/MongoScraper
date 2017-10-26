const express = require("express");
const methodOverride = require('method-override');
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const exphbs = require("express-handlebars");
const routes = require("./controllers/controller.js");
const path = require('path');
const mongoose = require('mongoose');
const db = require('./connection/connection.js');


app.use(methodOverride('X-HTTP-Method-Override'))
app.use(express.static(path.resolve('./public')));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/",routes);
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

