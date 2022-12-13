import { ethers } from 'hardhat';

async function main() {
  const [addr1] = await ethers.getSigners();
  const MyNFTInit = await ethers.getContractFactory("MyNFTInit");
  const myNFTInit = await MyNFTInit.deploy("Web3 Online Judge NFT", "WEB3OJNFT");
  await myNFTInit.deployed();

  await myNFTInit.mint(addr1.address, 0);

  const problemAddress = "0xa093f0d67A45d9437F536383B4FfC604c8fE7512";
  const eRC721Init = await ethers.getContractAt("ERC721Init", problemAddress);
  const result = await eRC721Init.setWeb3ojNFT(myNFTInit.address);

  console.log(result);
}

main().catch(err => {
  console.log(err);
  process.exitCode = 1;
});
