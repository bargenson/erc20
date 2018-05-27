const chai = require('chai');
const expect = chai.expect;

const TrustUnionToken = artifacts.require('TrustUnionToken');
const TrustUnionTokenCrowdsale = artifacts.require('TrustUnionTokenCrowdsale');

contract('TrustUnionTokenCrowdsale', (accounts) => {

  it ('should not be closed when just deployed', async () => {
    // Given
    const trustUnionTokenCrowdsale = await TrustUnionTokenCrowdsale.deployed();

    // When
    const closed = await trustUnionTokenCrowdsale.hasClosed();

    // Then
    expect(closed).to.be.false;
  });

  it('should fail when tokens are bought without crowdsale having ownership of the token contract', async () => {
    // Given
    const amount = 123;
    const trustUnionToken = await TrustUnionToken.deployed();
    const trustUnionTokenCrowdsale = await TrustUnionTokenCrowdsale.deployed();

    // When / Then
    try {
      await trustUnionTokenCrowdsale.sendTransaction({ from: accounts[0], value: web3.toWei(0.2, 'ether') });
      throw new Error('Shoudl have failed');
    } catch (err) {
      expect(err).to.exist;
      expect(err).to.be.an.instanceOf(Error);
    }
  });
  
  it('should increase account balance and total supply when tokens are bought and crowdsale owns the token contract', async () => {
    // Given
    const trustUnionToken = await TrustUnionToken.deployed();
    const trustUnionTokenCrowdsale = await TrustUnionTokenCrowdsale.deployed();
    const rate = await trustUnionTokenCrowdsale.rate();
    const wei = web3.toWei(0.2, 'ether');
    const tokens = wei * rate;
    await trustUnionToken.transferOwnership(trustUnionTokenCrowdsale.address);

    // When
    await trustUnionTokenCrowdsale.send(wei);

    // Then
    const balance = await trustUnionToken.balanceOf(accounts[0]);
    const supply = await trustUnionToken.totalSupply();
    expect(balance.toNumber()).to.be.equal(tokens);
    expect(supply.toNumber()).to.be.equal(tokens);
  });

});
