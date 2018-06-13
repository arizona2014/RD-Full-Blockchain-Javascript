const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const previousBlockHash = 'SJNDCSDKFSLKFNSDVDSV6FD43KJVNDS';
const currentBlockData = [
  {
    amount: 10,
    sender: 'LSDKFSDLKFCDSCDSSDFQFS',
    recipient: 'SDSORIEWREWPORIWERWE'
  },
  {
    amount: 30,
    sender: 'LSDKFSDLKFCDSCDSSDFQFS',
    recipient: 'SDSORIEWREWPORIWERWE'
  },
  {
    amount: 330,
    sender: 'LSDKFSDLKFCDSCDSSDFQFS',
    recipient: 'SDSORIEWREWPORIWERWE'
  }
];

console.log(bitcoin);