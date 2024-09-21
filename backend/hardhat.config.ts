import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
   networks: {
    hardhat: {
      chainId: 1337,
    },
    arbitrumOne: {
      url: 'https://arb-sepolia.g.alchemy.com/v2/JEZWAZmvNQqfmIVrqNbj7O9xVl51mmmP',
      chainId: 421614,
      //accounts: [Sepolia_TESTNET_PRIVATE_KEY]
    },
  },
};








export default config;
