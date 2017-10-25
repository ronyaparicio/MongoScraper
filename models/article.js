const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//table schema
const articleSchema = new Schema({
    title: String,
    link: String,
    date: {
        type: Date,
        default:Date.now
    },
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Note"
        }
    ]
});

// creating new table/collection if there isn't one already
const article = mongoose.model('article', articleSchema);

module.exports = article;