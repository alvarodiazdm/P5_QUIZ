var express = require('express');
var path = require('path');

var route = express.Router();

route.get('./views/credits.ejs',function(req,res){
   req.render("HOLA HOLA");
});

route.listen(3000);