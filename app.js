const express = require('express')
const app = express()

console.log("-----------------");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var api = require('./api/index');
app.use('/api', api);

app.listen(8000, () => console.log('Example app listening on port 3000!'))