require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.6.12",

  networks: {
    // bsctest: {
    //     url: "https://data-seed-prebsc-2-s2.binance.org:8545/",
    //     accounts: [process.env.PRIV_KEY],
    //     gasPrice: 10000000000,
    //     blockGasLimit: 1000000
    //   },
    bsc: {
        url: "https://bsc-dataseed1.binance.org/",
        accounts: [process.env.PRIV_KEY],
        gasPrice: 5100000000,
        blockGasLimit: 1000000
    }
},
etherscan: {
  // Your API key for Etherscan
  // Obtain one at https://etherscan.io/
  apiKey: [process.env.bscscanApiKey]
}
};