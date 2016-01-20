var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index'); //Renders index and layout
});

module.exports = router;
