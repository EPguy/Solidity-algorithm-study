import { ethers } from "hardhat";

// 곱셈
async function main() {
  const MyMultiplicationCalculator = await ethers.getContractFactory("MyMultiplicationCalculator");
  const myMultiplicationCalculator = await MyMultiplicationCalculator.deploy();
  await myMultiplicationCalculator.deployed();

  const problemAddress = "0xb20bc0b82C92a663b2fa1B47426CCd8ecECbb8a7"
  const multiplicationCalculatorProblem = await ethers.getContractAt("MultiplicationCalculatorProblem", problemAddress);
  const result = await multiplicationCalculatorProblem.setMultiplicationCalculator(myMultiplicationCalculator.address);
  console.log(result);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
