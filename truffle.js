const PrivateKeyProvider = require('truffle-privatekey-provider');
const config = require('./config');

const infuraApiKey = config.infura.apiKey;
const privateKey = config.ropsten.privateKey;

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
    },
    ropsten: {
      provider: new PrivateKeyProvider(privateKey, 'https://ropsten.infura.io/' + infuraApiKey),
      network_id: 3,
    }
  },
  wallet: '0x7f6929C89197877697D87dd294F7f5DdCE7aD49A',
};
