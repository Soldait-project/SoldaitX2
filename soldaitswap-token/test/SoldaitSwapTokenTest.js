
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SoldaitSwap token", function () {
  it("Should return owner of token", async function () {
    const [owner]=await ethers.getSigners();
    const TetToken = await ethers.getContractFactory("SoldaitSwapToken");
    const tetToken = await TetToken.deploy();
    await tetToken.deployed();
    const owneraddress= await tetToken.owner();

    expect(owneraddress).to.equal(owner.address);
  });
});
