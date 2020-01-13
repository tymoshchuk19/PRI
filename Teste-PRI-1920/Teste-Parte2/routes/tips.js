var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/:tiper', function(req, res, next) {
  console.log(req.tiper)
  axios.get("http://clav-api.dglab.gov.pt/api/tipologias/" + req.params.tiper + "?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ")
      .then(dados => { console.log(dados.data); res.render('tipologia', {tip: dados.data})} )
      .catch(erro => res.render(erro));
});

module.exports = router;
