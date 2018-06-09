const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
bitcoin.createNewBlock(555,'DSFD5445TLKLJ','JKNE9EJIE?E');
bitcoin.createNewTransaction(100, 'ALEXIHDD9DJH9', 'JENXN9JSD9D0D');
bitcoin.createNewBlock(11,'DZDZDZDZDZ','XSEEDEDED?E');

bitcoin.createNewTransaction(55, 'ALEXIHDD9DJH9', 'JENXN9JSD9D0D');
bitcoin.createNewTransaction(1600, 'ALEXIHDD9DJH9', 'JENXN9JSD9D0D');
bitcoin.createNewTransaction(560, 'ALEXIHDD9DJH9', 'JENXN9JSD9D0D');

console.log(bitcoin);