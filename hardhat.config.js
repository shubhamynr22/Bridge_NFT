require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

let secret = require("./secreate")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  defaultNetwork : "mumbai",
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: "https://speedy-nodes-nyc.moralis.io/a61a52180976b08f4ff81c83/polygon/mumbai",
      chainId: 80001,
      gasPrice: 20000000000,
      accounts: [secret.key]
    },
  },
};