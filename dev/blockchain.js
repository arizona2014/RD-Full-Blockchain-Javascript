const sha256 = require('sha256');
const currentNodeUrl = process.argv[3];


// This is the Blockchain main object
function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
  this.currentNodeUrl = currentNodeUrl;
  this.networkNodes = [];
  this.createNewBlock(100, '0', '0');
}

// Function responsible for creating a new block in the chain
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash
  };

  this.pendingTransactions = [];
  this.chain.push(newBlock);

  return newBlock;

};

Blockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1];
};

// Function that creates a new transaction and pushes to the pendingTransaction array of the chain
Blockchain.prototype.createNewTransaction = function (amount, sender, recipient) {
  const newTransaction = {
    amount: amount,
    sender: sender,
    recipient: recipient
  };

  this.pendingTransactions.push(newTransaction);

  // returns the number of the block the newTransaction will be added to
  return this.getLastBlock()['index'] + 1;

};

Blockchain.prototype.hashBlock = function (previousBlockHash, currentBlockData, nonce) {
  const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  const hash = sha256(dataAsString);
  return hash;
};

Blockchain.prototype.proofOfWork = function (previousBlockHash, currentBlockData) {
  let nonce = 0;
  let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
  while( hash.substr(0,4) !== '0000' ) {
    nonce++;
    hash = this.hashBlock(previousBlockHash, currentBlockData, 54929);
    console.log(hash);
  }
  return nonce;
}

module.exports = Blockchain;