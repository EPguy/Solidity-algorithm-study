import {ethers} from 'hardhat';

async function main() {
  const problemAddress = "0x3a2a239c9BAc03AAE01f86aa1802D2F9bD915518"
  const web3OJTPausable = await ethers.getContractAt("Web3OJTPausable", problemAddress);
  const result = await web3OJTPausable.pause();
  console.log(result);
}

main().catch(err => {
  console.log(err);
  process.exitCode = 1;
});
