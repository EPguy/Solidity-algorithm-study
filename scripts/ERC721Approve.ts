import {ethers} from 'hardhat';

async function main() {
  const problemAddress = "0xBA0626e55a2A2664551Df11a957513F32E3D1339";
  const nft = await ethers.getContractAt("ERC721Approve", problemAddress);
  const result = await nft.approve(problemAddress,0);
  console.log(result);
}

main().catch(err => {
  console.log(err);
  process.exitCode = 1;
});
