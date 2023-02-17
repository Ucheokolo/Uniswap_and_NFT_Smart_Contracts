import { ethers } from "hardhat";

async function main() {
    const [owner] = await ethers.getSigners();
    const myNft = await ethers.getContractFactory("EvictionNft")
    const _myNft = await myNft.deploy();
    await _myNft.deployed();
    const ntfAddress = _myNft.address;
    console.log(`My nft is deployed to ${ntfAddress}`);


    const nftContract = await ethers.getContractAt("iEvicttion", ntfAddress);
    await nftContract.safeMint(owner.address, "QmSinLt4dkPZ34N1fR8MZxMVHAXhebnsJHxte7Etqqrfun");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});