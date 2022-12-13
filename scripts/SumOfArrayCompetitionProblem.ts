import { ethers } from 'hardhat';

async function main() {
  const problemAddress = "0xc46bf2557E3f66f3547CDE9d8486A26ecf7ba2E6";
  const sumOfArrayCompetitionProblem = await ethers.getContractAt("SumOfArrayCompetitionProblem", problemAddress);

  const SumOfArraySolveContract = await ethers.getContractFactory("SumOfArraySolveContract");
  const sumOfArraySolveContract = await SumOfArraySolveContract.deploy();
  await sumOfArraySolveContract.deployed();

  const result = await sumOfArrayCompetitionProblem.setSumOfArrayContract(sumOfArraySolveContract.address);
  console.log(result);
}

main().catch(err => {
  console.log(err);
  process.exitCode = 1;
});
