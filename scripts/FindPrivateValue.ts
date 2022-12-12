import { ethers } from "hardhat";

// private value 찾기
async function main() {
  const provider = ethers.provider;

  const problemAddress = "0x8C13Ab410Dc22E87EF40311FE9A782555f8d289F";
  const secretValueHex = await provider.getStorageAt(problemAddress, 0);
  const secretValue = parseInt(secretValueHex, 16);

  const findPrivateValue = await ethers.getContractAt("FindPrivateValue", problemAddress);
  await findPrivateValue.setValue(secretValue);

  const isSame = await findPrivateValue.isSame();
  console.log(isSame);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
