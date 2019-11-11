const mongoose = require('mongoose');

const filmeSchema = new mongoose.Schema({
    title: String,
    year: Number,
    cast: [String],
    genres: [String]
});

module.exports = mongoose.model('Filmes', filmeSchema); 
