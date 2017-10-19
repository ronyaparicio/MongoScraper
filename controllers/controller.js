const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const cheerio = require("cheerio");
const request = require("request");


router.post("/", (req,rs)=> {

});

router.get("/saved", (req,res)=> {
    res.render("savedArticles");

});

router.put("saved", (req,res)=> {

});
var results = [];
//route scrape articles from nyt
router.get("/scrape", (req,res)=> {
    
    request("http://www.nytimes.com", function (error, response, html) {
        var $ = cheerio.load(html);
        results;
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