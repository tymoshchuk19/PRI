var express = require('express');
var router = express.Router();
const Ficheiros = require('../controllers/ficheiros');

router.get('/ficheiros', function(req, res, next) {
  Ficheiros.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.post('/ficheiros', (req, res) => {
  console.log(req.body);
  Ficheiros.novoFicheiro()
    .then(dados => res.jsonp({mensagem: dados.path + ' foi gravado com sucesso.'}))
    .catch(erro => res.status(500).jsonp(erro));
})

module.exports = router;
