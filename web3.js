const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

// Connect to Ganache
const web3 = new Web3('http://127.0.0.1:7545');

// Load ABI and Contract Address
const abi = JSON.parse(fs.readFileSync(path.resolve(__dirname, './EtherWalletABI.json'), 'utf-8'));
const contractAddress = '0x901835e1ABB11839049BeA37935e8ed9f6d8a498';

const contract = new web3.eth.Contract(abi, contractAddress);

module.exports = { web3, contract };
