import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {

    hardhat: {
      forking: {
        //@ts-ignore
        url: process.env.GOERLI_RPC,
      }
    }
    // goerli: {
    //   url: process.env.GOERLI_RPC,
    //   //@ts-ignore
    //   accounts: [process.env.PRIVATE_KEY]

    // }

  }
};

export default config;
