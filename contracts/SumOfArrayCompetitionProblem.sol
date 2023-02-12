//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ISumOfArray {
    function sum(uint[] memory _a) external pure returns (uint);
}

contract SumOfArrayCompetitionProblem {
    ISumOfArray public sumOfArrayContract;

    function setSumOfArrayContract(address _sumOfArrayContract) public {
        sumOfArrayContract = ISumOfArray(_sumOfArrayContract);
    }
}

contract SumOfArraySolveContract is ISumOfArray {
    function sum(uint[] memory _a) override public pure returns (uint total) {
        assembly {
            let len := mload(_a)
            let dataElementLocation := add(_a, 0x20)
            for
                { let end := add(dataElementLocation, mul(len, 0x20)) }
                lt(dataElementLocation, end)
                { dataElementLocation := add(dataElementLocation, 0x20) }
            {
                total := add(total, mload(dataElementLocation))
            }
        }
    }
}
