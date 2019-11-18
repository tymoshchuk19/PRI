const mongoose = require('mongoose');

const obraSchema = new mongoose.Schema({
    _id: String,
    nome: String,
    desc: String,
    anoCriacao: String,
    periodo: String,
    compositor: String,
    duracao: String
});

module.exports = mongoose.model('Obras', obraSchema); 
