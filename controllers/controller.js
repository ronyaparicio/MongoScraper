const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const cheerio = require("cheerio");
const request = require("request");

router.get("/", function(req, res) {

});

router.post("/", (req,rs)=> {

});

router.get("/saved", (req,res)=> {
    res.render("savedArticles");

});

router.put("saved", (req,res)=> {

});

router.get("/scrape", (req,res)=> {
    var results = [];
    request("http://www.nytimes.com", function (error, response, html) {
        var $ = cheerio.load(html);
        $("h2.story-heading").each(function (i, element) {

            var link = $(element).children().attr("href");
            var title = $(element).children().text();
            results.push({
                title: title,
                link: link
            });
        });
        
    });
    res.render("scrape",{results: results})
    console.log(results);
});

module.exports = router;