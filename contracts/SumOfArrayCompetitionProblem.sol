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
    function sum(uint[] memory _a) override public pure returns (uint) {
        unchecked {
            uint total = 0;
            for(uint i = 0; i < _a.length; i++) {
                total += _a[i];
            }
            return total;
        }
    }
}
