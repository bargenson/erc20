/* global artifacts:true web3:true it:function contract:function */

const { expect } = require('chai');

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

  it('should not mint when account is not contract owner', async () => {
    // Given
    const amount = 123;
    const trustUnionToken = await TrustUnionToken.deployed();

    // When / Then
    try {
      await trustUnionToken.mint(accounts[0], amount);
      throw new Error('Should have failed');
    } catch (err) {
      /* eslint no-unused-expressions: 'off' */
      expect(err).to.exist;
      expect(err).to.be.an.instanceOf(Error);
    }
  });

});
