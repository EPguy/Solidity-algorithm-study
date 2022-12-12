import { ethers } from 'hardhat';

async function main() {
  const MyMintableToken = await ethers.getContractFactory("MyMintableToken");
  const myMintableToken = await MyMintableToken.deploy("hello", "hl");
  await myMintableToken.deployed();

  const problemAddress = "0x458E312A1aAe21D3A7b7e2621CfC526136552080";
  await myMintableToken.changeOwner(problemAddress);

  const eRC20Mintable = await ethers.getContractAt("ERC20Mintable", problemAddress);
  const result = await eRC20Mintable.setToken(myMintableToken.address);

  console.log(result);
}

main().catch(err => {
  console.log(err);
  process.exitCode = 1;
});
