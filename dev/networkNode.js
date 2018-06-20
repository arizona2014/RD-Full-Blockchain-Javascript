var express = require('express');
var app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const uuid = require('uuid/v1');
const port = process.argv[2];

const nodeAddress = uuid().split('-').join('');
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
  // Mining process
  const lastBlock = bitcoin.getLastBlock();
  const previousHashHash = lastBlock['hash'];
  const currentBlockData = {
    transactions: bitcoin.pendingTransactions,
    index: lastBlock['index'] + 1
  };
  const nonce = bitcoin.proofOfWork(previousHashHash, currentBlockData);
  const blockHash = bitcoin.hashBlock(previousHashHash, currentBlockData, nonce);

  const newBlock = bitcoin.createNewBlock(nonce, previousHashHash, blockHash);
  // Mining process

  // Rewarding miner for mining new block
  bitcoin.createNewTransaction(12.5, '00', nodeAddress);

  res.json({
    note: "New block mined successfully",
    block: newBlock
  });

});

app.post('/register-and-broadcast-node', function (req, res) {
  const newNodeUrl = req.body.newNodeUrl;
  if( bitcoin.networkNodes.indexOf(newNodeUrl) == -1 ) bitcoin.networkNodes.push(newNodeUrl);

  bitcoin.networkNodes.forEach( networkNodeUrl => {

  });

});

app.post('/register-node', function (req, res) {

});

app.post('/register-nodes-bulk', function (req, res) {

});

app.listen(port, function() {
  console.log(`Running API on port ${port} `);
});