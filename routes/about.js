/**
 * Created by renata on 28/12/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', {   title: 'Meu Site',
                            name: 'Renata',
                            teste: 'Olá, isso é um teste.' });
});

module.exports = router;
