import { ethers } from "hardhat";

async function main() {
    //uniswap router address
    const ROUTER = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

    //dai token address
    const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

    const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

    const ImpersonatorAct = "0x748dE14197922c4Ae258c7939C7739f3ff1db573";



    // GETTING INTERFACE FOR IMPLEMENTATIONS
    const UniContract = await ethers.getContractAt("IUniswap", ROUTER);
    const DaiContract = await ethers.getContractAt("IToken", DAI);
    const WrappedEth = await ethers.getContractAt("IToken", WETH);





}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});