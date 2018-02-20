var express = require('express');
var router = express.Router();

var fs = require('fs');
const url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  var q = url.parse(req.url, true);

  // var filename = "../contents/index.html";

  // res.sendfile(filename);

  res.render('index', { title: 'Express Default' });

});

module.exports = router;
