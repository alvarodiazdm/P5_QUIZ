var express = require('express');
var router = express.Router();

//const Sequelize = require ('sequelize');
//const {models} = require('../models/index');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});


module.exports = router;
