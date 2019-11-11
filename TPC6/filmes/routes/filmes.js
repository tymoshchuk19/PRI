const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:3019/api/filmes')
  .then(dados => res.render('lista-filmes', { filmes: dados.data }))
  .catch(error => res.render('error', { lista: error }));
});


/* GET user-form. */
router.get('/inserir', function(req, res, next) {
  res.render('form-filme');
});

/* GET user. */
router.get('/:idFilme', function(req, res, next) {
  axios.get(`http://localhost:3019/api/filmes/${req.params.idFilme}`)
  .then(dados => res.render('filme', {filme: dados.data}))
  .catch(error => res.render('error', { lista: error }));
});

/* POST user. */
router.post('/inserir', function(req, res, next) {
  axios.post(`http://localhost:3019/api/filmes/inserir`, req.body)
  .then(dados => { res.render('form-filme') })
  .catch(error => res.render('error', { lista: error }));
});

/* DELETE user. */
router.delete('/:idFilme', function(req, res, next) {
  axios.delete(`http://localhost:3019/api/filmes/${req.params.idFilme}`)
    .then(dados => { res.render('index')})
    .catch(error => res.render('error', { lista: error }));
});

module.exports = router;
