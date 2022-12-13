import { ethers } from 'hardhat';

async function main() {
  const [addr1] = await ethers.getSigners();
  const chainId = await addr1.getChainId();
  const problemAddress = "0xA71cE2608Ff3F90a7AbCd3D0f370cc9Ef58CF6A3";
  const token = await ethers.getContractAt("Web3OJTPermitable", problemAddress, addr1);
  const nonce = await token.nonces(addr1.address);
  const permitAmount = 20n * 10n ** (BigInt(await token.decimals()));

  const domain = {
    name: "Web3 Online Judge Token",
    version: "1",
    chainId,
    verifyingContract: problemAddress,
  };

  const types = {
    Permit: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
      { name: "value", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "deadline", type: "uint256" },
    ],
  };

  const value = {
    owner: addr1.address,
    spender: problemAddress,
    value: permitAmount,
    nonce: nonce,
    deadline: ethers.constants.MaxUint256,
  };

  const signedData = await addr1._signTypedData(domain, types, value);
  const sig = await ethers.utils.splitSignature(signedData);

  const { v, r, s } = sig;

  console.log(signedData);
  console.log(v,r,s);

  const result = await token.permit(
    addr1.address,
    problemAddress,
    permitAmount,
    ethers.constants.MaxUint256,
    v,
    r,
    s
  );

  console.log(result);
}

main().catch((err) => {
  console.log(err);
  process.exitCode = 1;
});
