var express = require('express');
var router = express.Router();
const Pub = require('../controllers/pubs');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.author){
    Pub.consultarporauthor(req.query.author)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));}
  else if(!req.query.type)
    Pub.listar()
      .then(data => {
        index = 0; 
        var n = [];
        while (index < data.length) { 
            var novo = { 
              id: data[index].id,
              title: data[index].title,
              year: data[index].year,
              type: data[index].type
            } 
            n.push(novo); 
            index++; 
        }
        res.jsonp(n);
      })
      .catch(error => res.status(500).jsonp(error));
  else if (!req.query.year)
    Pub.consultarportype(req.query.type)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error));
  else
    Pub.consultarportypeeyear(req.query.type,req.query.year)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));
      
});


router.get('/:id', function(req, res, next) {
  Pub.consultar(req.params.id)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));
});

module.exports = router;
