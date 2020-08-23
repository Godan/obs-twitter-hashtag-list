var express = require('express');
var router = express.Router();

require('dotenv').config()

const env = process.env

router.get('/', async (req, res) =>{

  var Twitter = require('twitter');
  
  var client = new Twitter({
    consumer_key: env.CONSUMER_KEY,
    consumer_secret: env.CONSUMER,
      access_token_key: env.ACCESS_TOKEN_KEY,
    access_token_secret: env.ACCESS_TOKEN_SECRET_KEY 
  }); 
  var params = {q: '#マリン航海記'};
  client.get('search/tweets', params, function(error, tweets, response) {
    res.send(tweets)
  });
});

module.exports = router;