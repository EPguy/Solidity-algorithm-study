import { ethers } from "hardhat";

// 나눗셈
async function main() {
  const MyDivisionCalculator = await ethers.getContractFactory("MyDivisionCalculator");
  const myDivisionCalculator = await MyDivisionCalculator.deploy();
  await myDivisionCalculator.deployed();

  const problemAddress = "0xb20bc0b82C92a663b2fa1B47426CCd8ecECbb8a7";
  const divisionCalculatorProblem = await ethers.getContractAt("DivisionCalculatorProblem", problemAddress);
  const result = await divisionCalculatorProblem.setDivisionCalculator(myDivisionCalculator.address);
  console.log(result);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
