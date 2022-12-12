import { ethers } from 'hardhat';

async function main() {
  const [addr1] = await ethers.getSigners();
  const problemAddress = "0xF7ab4A89b6FF4c17B37071fAdd897cF697525b9e";
  const eRC20BurnableToken = await ethers.getContractAt("ERC20BurnableToken", problemAddress);
  const balanceAmt = await eRC20BurnableToken.balanceOf(addr1.address);
  const result = await eRC20BurnableToken.burn(balanceAmt);
  console.log(result);
}

main().catch(err => {
  console.log(err);
})
