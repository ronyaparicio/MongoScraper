//connection to the database
const mongoose = require('mongoose');

//create database mongoScraper
mongoose.connect('mongodb://localhost/mongoScraper');
//connecting to database
const db = mongoose.connection
    .once('open', () => console.log('Your connected to the db!'))
    .on('error', (error) => {
        console.warn('warning', error);
    });

module.exports = db;