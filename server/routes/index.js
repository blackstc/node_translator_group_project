var express = require('express');
var randomWords = require('random-words');
var router = express.Router();
// var mongoose = require('mongoose');
// var User = mongoose.model('users');
var keys=require('../routes/key');
var bt = require('../../node_modules/bing-translate/lib/bing-translate.js').init({
     client_id:keys.client_id,
     client_secret:keys.client_secret
   });

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Language Translator' });
});


router.post('/submit', function(req, res, next){
  if (req.body.name === "") {
    res.send("Please enter a name");
  } else {
  new User({name: req.body.name})
    .save(function(err, user) {
      res.redirect('practice');
    });
  }
});

router.get('/practice', function(req, res, next) {
  res.render('practice', { title: 'Language Translator' });
});

router.get('/play/:id', function(req, res, next) {
  var randomWord = randomWords();
  console.log(randomWord);
  res.render('play', {
    randomWord : randomWord,
    languageTo : languageTo,
    languageFrom : languageFrom
  });
});

// get SINGLE superhero
router.get('/play/:id', function(req, res) {
  var query = {"_id": req.params.id};
  Superhero.findOne(query, function(err, superhero){
    // console.log(superhero);
    res.json(superhero);
  });
});

module.exports = router;
