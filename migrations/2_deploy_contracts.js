/* global artifacts:true web3:true */
const config = require('../config');

const TrustUnionToken = artifacts.require('./TrustUnionToken.sol');
const TrustUnionTokenCrowdsale = artifacts.require('./TrustUnionTokenCrowdsale.sol');

module.exports = function (deployer) {
  return deployer.deploy(TrustUnionToken)
    .then((trustUnionToken) => {
      return new Promise((resolve, reject) => {
        web3.eth.getBlock('latest', (err, latestBlock) => {
          if (err) throw err;
          const openingTime = latestBlock.timestamp;
          const daysDuration = 20;
          const closingTime = openingTime + (86400 * daysDuration);
          const rate = new web3.BigNumber(1000);
          const { address } = config.ropsten.wallet;
          deployer.deploy(
            TrustUnionTokenCrowdsale,
            openingTime,
            closingTime,
            rate,
            address,
            TrustUnionToken.address,
          ).then(() => {
            return trustUnionToken.transferOwnership(TrustUnionTokenCrowdsale.address);
          }).then(() => {
            resolve();
          }).catch((err) => {
            reject(err);
          });
        });
      });
    });
};
