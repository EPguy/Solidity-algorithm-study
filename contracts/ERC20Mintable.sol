// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC20Mintable {
    function mint(address to, uint256 amount) external;
}

contract ERC20Mintable {
    IERC20Mintable public token;

    function setToken(address _token) public {
        token = IERC20Mintable(_token);
    }
}

contract MyMintableToken is ERC20, IERC20Mintable, Ownable {

    constructor(string memory name, string memory symbol) ERC20(name, symbol){
        _mint(msg.sender, 2000000000 * 10**uint(decimals()));
    }

    function changeOwner(address newOwner) public onlyOwner {
        transferOwnership(newOwner);
    }

    function mint(address to, uint256 amount) override public onlyOwner {
        _mint(to, amount);
    }
}
