//connection to the database
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoScraper');
mongoose.connection
    .once('open', () => console.log('Your connection was succesful'))
    .on('error', (error) => {
        console.warn('warning', error);
    });