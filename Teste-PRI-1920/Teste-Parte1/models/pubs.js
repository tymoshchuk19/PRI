const mongoose = require('mongoose');

const pubSchema = new mongoose.Schema({
    id: String, 
    title: String,
    year: String,
    type: String,
    authors: Array
});

module.exports = mongoose.model('pubs', pubSchema);