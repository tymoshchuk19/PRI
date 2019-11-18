const ObraModel = require('../models/obras');

var Obras = module.exports;

//Devolve lista de obras
Obras.listar = (filterFlags) => {
    return ObraModel
        .find(filterFlags)
        .exec();
}

//Devolve lista de compositores ordenados pelo numero de obras decrescentemente
Obras.compositores = () => {
    return ObraModel
        .aggregate([{$group: {
            _id: "$compositor",
            numObras: {
              $sum: 1
            }
          }}, {$sort: {
            numObras: -1
          }}])
          .exec();
}

