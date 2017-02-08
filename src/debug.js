var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8555'))
web3.eth.defaultAccount = web3.eth.accounts[0];

var universe = require('./universe');
var u = universe(web3);

var system = require('./system');

var galaxy;
var System; 

u.createUniverse().then(function(_galaxy) {
  galaxy = _galaxy;
  System = system(web3, galaxy);
  r();
});

function r() {
  console.log("READY!!!")
}

function l() {
  console.log(arguments);
}

module.exports = {
  web3: web3,
  u: u,
  System: System,  
}