import { ethers } from "hardhat";

async function main() {
  const problemAddress = "0x70b5c54983f2C10D6530b0b4060d1e96e7f284aA";

  const Unlocker = await ethers.getContractFactory("Unlocker");
  const unlocker = await Unlocker.deploy(problemAddress);

  await unlocker.deployed();

  const result = await unlocker.unlock();
  console.log(result);
}

main().catch(err => {
  console.log(err);
  process.exitCode = 1;
});
