const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
bitcoin.createNewBlock(555,'DSFD5445TLKLJ','JKNE9EJIE?E');
bitcoin.createNewTransaction(100, 'ALEXIHDD9DJH9', 'JENXN9JSD9D0D');
bitcoin.createNewBlock(11,'DZDZDZDZDZ','XSEEDEDED?E');

console.log(bitcoin);