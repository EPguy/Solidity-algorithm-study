import { ethers } from "hardhat";

// 뺄셈
async function main() {
  const MyMinusCalculator = await ethers.getContractFactory("MyMinusCalculator");
  const myMinusCalculator = await MyMinusCalculator.deploy();
  await myMinusCalculator.deployed();

  const problemAddress = "0xb20bc0b82C92a663b2fa1B47426CCd8ecECbb8a7"
  const minusCalculatorProblem = await ethers.getContractAt("MinusCalculatorProblem", problemAddress);
  const result = await minusCalculatorProblem.setMinusCalculator(myMinusCalculator.address);
  console.log(result);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
