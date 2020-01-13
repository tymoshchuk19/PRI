const express = require('express');
const router = express.Router();
const axios = require('axios');
const { host, port } = require('../config/env');

/* GET home page. */
router.get('/', function(req, res) {
  axios.get('http://'+ host + ':' + port + '/api/ficheiros')
    .then(dados => {
      res.render('index', {lista: dados.data});
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

module.exports = router;