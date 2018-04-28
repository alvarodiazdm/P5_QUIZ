var express = require('express');
//var path = require('path');

var route = express.Router();

route.get('/',function(req,res){
   res.render('credits');
});

module.exports = route;