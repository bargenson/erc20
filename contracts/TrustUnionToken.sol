pragma solidity 0.4.24;
import 'openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol';


contract TrustUnionToken is MintableToken {

  string public name = 'TrustUnion Token';
  string public symbol = 'TUN';
  uint public decimals = 18;

}
