pragma solidity 0.4.24;

import './TrustUnionToken.sol';
import 'openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol';
import 'openzeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol';


contract TrustUnionTokenCrowdsale is TimedCrowdsale, MintedCrowdsale {
  
  constructor(
    uint256 _openingTime,
    uint256 _closingTime,
    uint256 _rate,
    address _wallet,
    TrustUnionToken _token
  ) public Crowdsale(_rate, _wallet, _token) TimedCrowdsale(_openingTime, _closingTime) {
    // Do nothing
  }

}