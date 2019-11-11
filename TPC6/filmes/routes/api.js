const express = require('express');
const router = express.Router();
var Filmes = require('../controllers/filmes')

/* GET filmes listing. */
router.get('/filmes', function(req, res) {
  Filmes.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

/* GET filme. */
router.get('/filmes/:idFilme', function(req, res) {
  Filmes.filmeById(req.params.idFilme)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

/* POST filme. */
router.post('/filmes/inserir', function(req, res) {
  Filmes.newFilme(req.body)
    .then(dados => res.jsonp())
    .catch(erro => res.status(500).jsonp(erro));
});

/* DELETE filme. */
router.delete('/filmes/:idFilme', function(req, res) {
  Filmes.deleteFilme(req.params.idFilme)
    .then(dados => res.jsonp({}))
    .catch(erro => res.status(500).jsonp(erro));
});

module.exports = router;
