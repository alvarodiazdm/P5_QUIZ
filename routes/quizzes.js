var express = require ('express');
var router = express.Router();

const models = require('../models/index');

router.get('/',function(req,res){
   //definir la tabla de quizzes
   for(var i =0; i<quizzes.length;i++){
       res.render('quizzes',{quiz: `${quizzes[i]}`});
   }
});

//module.exports = route;