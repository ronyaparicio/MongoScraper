const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//table schema
const articleSchema = new Schema({
    title: string,
    sumary: string,
    URL: string
});

// creating new table/collection if there isn't one already
const article = mongoose.model('user', articleSchema);

module.exports = article;