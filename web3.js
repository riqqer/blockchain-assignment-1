const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

// Connect to Ganache
const web3 = new Web3('http://127.0.0.1:7545');

// Load ABI and Contract Address
const abi = JSON.parse(fs.readFileSync(path.resolve(__dirname, './EtherWalletABI.json'), 'utf-8'));
const contractAddress = '0x238D2f3da559A647f63Dc359776F90FDF7578f39';

const contract = new web3.eth.Contract(abi, contractAddress);

module.exports = { web3, contract };
