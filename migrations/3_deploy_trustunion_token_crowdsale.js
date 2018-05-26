/* global artifacts:true web3:true */
const config = require('../config');

const TrustUnionToken = artifacts.require('./TrustUnionToken.sol');
const TrustUnionTokenCrowdsale = artifacts.require('./TrustUnionTokenCrowdsale.sol');

module.exports = function (deployer) {
  web3.eth.getBlock('latest', (err, latestBlock) => {
    if (err) throw err;
    const openingTime = latestBlock.timestamp + 2;
    const daysDuration = 20;
    const closingTime = openingTime + (86400 * daysDuration);
    const rate = new web3.BigNumber(1000);
    const { wallet } = config;
    deployer.deploy(
      TrustUnionTokenCrowdsale,
      openingTime,
      closingTime,
      rate,
      wallet,
      TrustUnionToken.address,
    );
  });
};
