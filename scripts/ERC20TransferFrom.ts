import { ethers } from "hardhat";

// ERC-20 인출하기
async function main() {
  const [addr1] = await ethers.getSigners();

  const tokenOwnerAddress = "0x85ba85216CC19D106f82e7d605221d4CF7B6e2D3";
  const problemAddress = "0x1067E9A315A538F8Ab123974926bDD7c1A9F7ca4";
  const eRC20TransferFrom = await ethers.getContractAt("ERC20TransferFrom", problemAddress);

  const allowanceAmt = await eRC20TransferFrom.allowance(tokenOwnerAddress, addr1.address);
  console.log("전송 승인된 금액 : " + allowanceAmt);

  const result = await eRC20TransferFrom.transferFrom(tokenOwnerAddress, addr1.address, allowanceAmt);
  console.log(result);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
