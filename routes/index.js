var express = require('express');
var router = express.Router();
var Pokemon = require('../models/pokedex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//CREATE POKEMON
router.post('/pokemon', (req,res)=>{
  Pokemon.create(req.body);
  res.send("added pokemon")
});


//FIND A POKEMON
router.get('/pokemon/:name', (req,res)=>{
  Pokemon.find({name: req.body.name}, (error, results)=>{
    if (error) res.send(error);
    else res.send(results)
  });

});

//UPDATE A POKEMON
router.put('/pokemon/:name', (req,res)=>{
  Pokemon.findOneAndUpdate({name:req.body.name}, {hp:req.query.hp, attack:req.query.attack, defense:req.query.defense,
    speed:req.query.speed, sp_atk:req.query.sp_atk, sp_def:req.query.sp_def, main_type:req.query.main_type}, (error)=>{
    if (error) res.send(error);
    else res.send("updated  pokemon")
  })
});

//DELETE A POKEMON
router.delete('/pokemon/:id', (req,res)=>{
  res.send("delete a pokemon")
});

//GET ALL POKEMON
router.get('/pokemon/', (req,res)=>{
  res.send("get all pokemon")
});

module.exports = router;
