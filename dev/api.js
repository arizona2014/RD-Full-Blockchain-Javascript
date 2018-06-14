var express = require('express');
var app = express();
require('dotenv').config();


app.get('/', function (req, res) {
  res.json({message: 'Hello world'});
});

console.log('Running API on port ', process.env.APP_PORT);
app.listen(process.env.APP_PORT);