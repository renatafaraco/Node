var express = require('express');
var router = express.Router();
var vd = require('../videodata.json');

router.get('/', function(req, res, next) {
  res.render('index', {
                        title: 'Meu Site',
                        name: 'Renata',
                        videodata: vd});
});



module.exports = router;
