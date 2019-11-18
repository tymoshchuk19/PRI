var express = require('express');
var router = express.Router();
var Obras = require('../controllers/obras')


/* GET obras. */
router.get('/obras', function(req, res, next) {
  Obras.listar(req.query)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

router.get('/compositores', function(req,res){
  Obras.compositores()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).json(erro))
  
})

router.get('/compositores/:nome', function(req,res){
  Obra.compObras(req.params.nome)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).json(erro))
  
})


module.exports = router;
