require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_URL,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
  },
};

// Dogecoin deployed to: 0xDD83e5FB60c96342ECAEf41a56e89eB48ac00A2c
// LinkToken deployed to: 0xB672a0e619888416481fe464b9C5AbC8747c39CF
// DaiToken deployed to: 0x414153580a1C9e4fbF2D1809aB6cd6703905Ac0B
// UsdcToken deployed to: 0x5605296d072180d8A6D2f94AD9a165339FEe2d1a
