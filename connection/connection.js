//connection to the database
const mongoose = require('mongoose');

//create database mongoScraper
mongoose.connect('mongodb://localhost/mongoScraper');
//connecting to database
mongoose.connection
    .once('open', () => console.log('Your connection was succesful'))
    .on('error', (error) => {
        console.warn('warning', error);
    });