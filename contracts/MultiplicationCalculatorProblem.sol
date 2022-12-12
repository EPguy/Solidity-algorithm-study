pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IMultiplicationCalculator {
    function multiply(uint256, uint256) external pure returns (uint256);
}

contract MultiplicationCalculatorProblem{
    IMultiplicationCalculator public multiplicationCalculator;

    function setMultiplicationCalculator(address _multiplicationCalculator) public {
        multiplicationCalculator = IMultiplicationCalculator(_multiplicationCalculator);
    }
}

contract MyMultiplicationCalculator is IMultiplicationCalculator {
    MultiplicationCalculatorProblem public multiplicationCalculatorProblem;

    function multiply(uint256 input1, uint256 input2) override public pure returns (uint256){
        return input1 * input2;
    }
}
