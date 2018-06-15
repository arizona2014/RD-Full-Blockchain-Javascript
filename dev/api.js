var express = require('express');
var app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/blockchain', function (req, res) {
  res.send(bitcoin);
});

app.post('/transaction', function (req, res) {
  const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  res.json({ note: `Transaction will be added in block ${blockIndex}.`});
});

app.get('/mine', function (req, res) {
  const newBlock = bitcoin.createNewBlock();
});

app.listen(process.env.APP_PORT, function() {
  console.log('Running API on port -> ', process.env.APP_PORT);
});