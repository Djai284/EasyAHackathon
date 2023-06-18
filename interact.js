
const Web3 = require('web3');


const web3 = new Web3('http://localhost:9933');


web3.eth.getBlockNumber().then(console.log);