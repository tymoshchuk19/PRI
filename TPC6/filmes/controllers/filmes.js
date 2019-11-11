const FilmeModel = require('../models/filmes');

var Filmes = module.exports;

//Devolve lista de filmes
Filmes.listar = () => {
    return FilmeModel
        .find()
        .exec();
}

Filmes.filmeById = idFilme => {
    return FilmeModel
        .findById(idFilme)
        .exec();
}

Filmes.newFilme = filme => {
    var novo = new FilmeModel(filme);
    return novo.save();
}

Filmes.deleteFilme = idFilme => {
    return FilmeModel
        .deleteOne({ _id: idFilme })
        .exec();
}
