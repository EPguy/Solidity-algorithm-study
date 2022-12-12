import { ethers } from "hardhat";

// 덧셈
async function main() {
  const MyPlusCalculator = await ethers.getContractFactory("MyPlusCalculator");
  const myPlusCalculator = await MyPlusCalculator.deploy();
  await myPlusCalculator.deployed();

  const problemAddress = "0xb20bc0b82C92a663b2fa1B47426CCd8ecECbb8a7"
  const plusCalculatorProblem = await ethers.getContractAt("PlusCalculatorProblem", problemAddress);
  const result = await plusCalculatorProblem.setPlusCalculator(myPlusCalculator.address);
  console.log(result);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
