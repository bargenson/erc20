const chai = require('chai');
const expect = chai.expect;

const TrustUnionToken = artifacts.require('TrustUnionToken');

contract('TrustUnionToken', (accounts) => {
  
  it('should start with an empty supply', async () => {
    // Given
    const trustUnionToken = await TrustUnionToken.deployed();

    // When
    const supply = await trustUnionToken.totalSupply();

    // Then
    expect(supply.toNumber()).to.be.equal(0);
  });

  it('should increase supply and transfer tokens when minted', async () => {
    // Given
    const amount = 123;
    const trustUnionToken = await TrustUnionToken.deployed();

    // When
    await trustUnionToken.mint(accounts[0], amount);

    // Then
    const supply = await trustUnionToken.totalSupply();
    const balance = await trustUnionToken.balanceOf(accounts[0]);
    expect(supply.toNumber()).to.be.equal(amount);
    expect(balance.toNumber()).to.be.equal(amount);
  });

});
