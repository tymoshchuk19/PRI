var express = require('express');
var router = express.Router();
const Pub = require('../controllers/pubs');

router.get('/', function(req, res, next) {
  Pub.authors()
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error));
});


module.exports = router;
