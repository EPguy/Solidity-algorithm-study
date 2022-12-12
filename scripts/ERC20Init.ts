import { ethers } from "hardhat";

async function main() {
  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy("Web3 Online Judge Token", "WEB3OJT");
  await myToken.deployed();

  const problemAddress = "0x71ede0acC3383838570478D5EfddBB2108f29f5B"
  const eRC20Init = await ethers.getContractAt("ERC20Init", problemAddress);
  const result = await eRC20Init.setWeb3ojt(myToken.address);
  console.log(result);
}

main().catch(err => {
  console.log(err);
  process.exitCode = 1;
});
