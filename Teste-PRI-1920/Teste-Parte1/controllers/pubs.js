const Pub = require('../models/pubs');

var Pubs = module.exports;

Pubs.listar = () => {
    return Pub
        .find()
        .exec();
}

Pubs.consultar = id => {
    return Pub
        .findOne({id: id})
        .exec();
}

Pubs.consultarportype = type => {
    return Pub
        .find({type: type})
        .exec();
}

Pubs.consultarportypeeyear = (type, year) => {
    return Pub
        .aggregate([
            {
                '$match': {
                    'type': type
                }
            }, {
                '$match': {
                    'year': {
                        '$gt': year
                    }
                }
            }
        ]);
}

Pubs.consultarporauthor = author => {
    return Pub
        .find({ authors: { $all: [author] } })
        .exec();
}

Pubs.inserir = pub => {
    var novo = new Pub(pub);
    return novo.save();
}

Pubs.types = () => {
    return Pub
        .aggregate([
            {
                '$group': {
                    '_id': '$type'
                }
            }, {
                '$project': {
                    '_id': 0, 
                    'type': '$_id'
                }
            }
        ]);
}

Pubs.authors = () => {
    return Pub
        .aggregate([
            {
                '$project': {
                    '_id': 0, 
                    'authors': '$authors'
                }
            }, {
                '$unwind': {
                    'path': '$authors'
                }
            }
        ]);
}