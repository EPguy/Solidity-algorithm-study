import { ethers } from 'hardhat';

async function main() {
  const [addr1] = await ethers.getSigners();
  const problemAddress = "0xf763DD3de2A9b7541531362FF14090393225997e";
  const runWithABI2Problem = await ethers.getContractAt("RunWithABI2Problem", problemAddress, addr1);

  const MyRunWithABI2 = await ethers.getContractFactory("MyRunWithABI2");
  const myRunWithABI2 = await MyRunWithABI2.connect(addr1).deploy();
  await myRunWithABI2.deployed();

  await myRunWithABI2.setProblem(problemAddress);

  const methodId = "0xa6e5ca07"; //디컴파일 해서 찾은 methodId

  const tx = await addr1.sendTransaction({
    data: methodId,
    to: myRunWithABI2.address
  });
  await tx.wait();

  const privateKey = await myRunWithABI2.getPrivateKey();

  await runWithABI2Problem.setRunWithABI2(myRunWithABI2.address);
  console.log(myRunWithABI2.address, runWithABI2Problem.address, privateKey);
}

main().catch(err => {
  console.log(err);
  process.exitCode = 1;
})
