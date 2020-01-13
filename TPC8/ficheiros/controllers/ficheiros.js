const Ficheiro = require('../models/ficheiros');

module.exports.listar = () => {
    return Ficheiro.find()
                   .exec();
}

module.exports.novoFicheiro = (ficheiro) => {
    return Ficheiro.save(ficheiro); 
}