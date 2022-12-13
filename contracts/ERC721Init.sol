// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC721Init{
    ERC721 public web3ojNFT;

    function setWeb3ojNFT(address _web3ojNFT) public {
        web3ojNFT = ERC721(_web3ojNFT);
    }
}

contract MyNFTInit is ERC721, Ownable {
    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) { }

    function mint(address to, uint tokenId) public onlyOwner {
        _mint(to, tokenId);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://app.web3oj.com/web3ojnft/";
    }
}
