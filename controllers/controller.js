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
//route scrape articles from nyt
router.get("/scrape", (req,res)=> {
    var results = [];
    let count = 0;
    request("http://www.nytimes.com", function (error, response, html) {
        var $ = cheerio.load(html);
        //results;
        $("h2.story-heading").each(function (i, element) {
            var link = $(element).children().attr("href");
            var title = $(element).children().text();
            
            if(link && title && count <= 9) {
                results.push({
                    title: title,
                    link: link
                });
                count++
            }
            
        });
        
        console.log('something!!!', results.length)
        
        res.render("scrape",{result: results})
    });
});

module.exports = router;