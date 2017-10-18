const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();

router.get("/", function(req, res) {
    console.log("it's working");
});

router.post("/", (req,rs)=> {

});

router.get("/saved", (req,res)=> {
    res.render("savedArticles");

});

router.put("saved", (req,res)=> {

});

module.exports = router;