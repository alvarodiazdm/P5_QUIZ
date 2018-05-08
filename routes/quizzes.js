var express = require ('express');
var router = express.Router();

const Sequelize = require('sequelize');
const {models} = require('../models/index');

router.get('/', function(req,res,next){
    models.quiz.findAll()
        .then(quizzes=>{
            res.render('quizzes',{quizzes: quizzes});
        })
        .catch(error => next(error));
});

module.exports = router;