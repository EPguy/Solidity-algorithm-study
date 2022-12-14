import { ethers } from 'hardhat';

async function main() {
  const [addr1] = await ethers.getSigners();
  const problemAddress = "0x650df8fc4D6EBc2E26076fa5a7Fdf8C965C340fb";
  const runWithABI2Problem = await ethers.getContractAt("RunWithABI2Problem", problemAddress, addr1);

  const MyRunWithABI2 = await ethers.getContractFactory("MyRunWithABI2");
  const myRunWithABI2 = await MyRunWithABI2.connect(addr1).deploy();
  await myRunWithABI2.deployed();

  const methodId = "0xa6e5ca07"; //디컴파일 해서 찾은 methodId

  let tx = await myRunWithABI2.setProblem(problemAddress, methodId);
  await tx.wait();

  const privateKey = await myRunWithABI2.getPrivateKey();

  await runWithABI2Problem.setRunWithABI2(myRunWithABI2.address); // 정답 Contract를 문제 Contract의 setRunWithABI2함수를 이용하여 등록한뒤 제출
  console.log(myRunWithABI2.address, runWithABI2Problem.address, privateKey);
}

main().catch(err => {
  console.log(err);
  process.exitCode = 1;
})
