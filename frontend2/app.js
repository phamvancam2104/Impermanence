var Web3 = require('web3');
window.web3 = new Web3();
// Change this if you have a different RPC address.
window.web3.setProvider(new window.web3.providers.HttpProvider('http://localhost:8545'))
window.build = require('./abi');
// Elegance later.
//window.impermanence = require('./impermanence');

//window.web3.setProvider(new window.web3.providers.HttpProvider('the-impermanence-of-space.on.ether.camp:8555/sandbox/3c3eed7ababee9fe3e5fa49685471dbe335f7d9e/'))
//console.log(window.web3.eth.accounts);
//JSON.stringify(url.parse(window.location.href));
