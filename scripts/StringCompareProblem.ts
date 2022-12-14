import {ethers} from 'hardhat';

async function main() {
  const problemAddress = "0x0a094D68594d339549d257014DFB32707784BE90";
  const stringCompareProblem = await ethers.getContractAt("StringCompareProblem", problemAddress);

  const StringCompareSolve = await ethers.getContractFactory("StringCompareSolve");
  const stringCompareSolve = await StringCompareSolve.deploy();
  await stringCompareSolve.deployed();

  const result = await stringCompareProblem.setStringCompareContract(stringCompareSolve.address);
  console.log(result);
}

main().catch(err => {
  console.log(err);
  process.exitCode = 1;
});
