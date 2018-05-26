const contract = require('truffle-contract');

const TrustUnionTokenCrowdsale = contract(require('../build/contracts/TrustUnionTokenCrowdsale.json'));
const TrustUnionToken = contract(require('../build/contracts/TrustUnionToken.json'));

// TrustUnionTokenCrowdsale.setProvider(web3.currentProvider);
// TrustUnionToken.setProvider(web3.currentProvider);

module.exports = function(callback) {
  TrustUnionTokenCrowdsale.deployed().then((tokenCrowdsale) => {
    return tokenCrowdsale.token();
  }).then((tokenAddress) => {
    console.log(tokenAddress);
    callback();
  }).catch((err) => {
    callback(err);
  });
  // const crowdsale = web3.eth.contract(tokenCrowdsaleABI).at(crowdsaleAddress);
  // const token = web3.eth.contract(tokenABI).at();
  // crowdsale.token((err, tokenAddress) => {
  //   if (err) throw err;
  //   const tokenContract = web3.eth.contract(tokenABI).at(tokenAddress);
  //   console.log(tokenContract.balanceOf(require('../config').wallet));
  //   callback();
  // });
}