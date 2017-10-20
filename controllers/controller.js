const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const cheerio = require("cheerio");
const request = require("request");
const article = require("../models/article.js")

mongoose.Promise = Promise;

router.post("/save", (req,rs)=> {
    let newArticle = new article(req.body);
    newArticle.save(function (err, doc) {
        if (err) {
            res.send(err)
        } else {
            console.log(doc)
        }
    })
});

router.get("/saved", (req,res)=> {
    article.find({}, (error, doc)=> {
        if(error) {
            res.send(error);
        } else {
            res.send(doc);
        }
        res.render("savedArticles",{art: doc})
    })
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