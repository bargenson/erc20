/* global artifacts:true */
const TrustUnionToken = artifacts.require('./TrustUnionToken.sol');

module.exports = function (deployer) {
  deployer.deploy(TrustUnionToken);
};
