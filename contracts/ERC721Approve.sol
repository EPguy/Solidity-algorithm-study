// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ERC721Approve is ERC721{
    constructor() ERC721("Web3 Online Judge NFT", "WEB3OJNFT") { }
}
