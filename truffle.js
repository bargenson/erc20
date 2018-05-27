const HDWalletProvider = require('truffle-hdwallet-provider');
const config = require('./config');

const infuraApiKey = config.infura.apiKey;
const { mnemomic } = config.ropsten.wallet;

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemomic, `https://ropsten.infura.io/${infuraApiKey}`),
      network_id: 3,
    },
  },
};
