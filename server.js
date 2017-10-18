const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const exphbs = require("express-handlebars");


const routes = require("./controllers/controller.js");
const path = require('path');
const mongoose = require('mongoose');


app.use(express.static(path.resolve('./public')));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/",routes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

