pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IDivisionCalculator {
    function divide(uint256, uint256) external pure returns (uint256);
}

contract DivisionCalculatorProblem{
    IDivisionCalculator public divisionCalculator;

    function setDivisionCalculator(address _divisionCalculator) public {
        divisionCalculator = IDivisionCalculator(_divisionCalculator);
    }
}

contract MyDivisionCalculator is IDivisionCalculator {
    DivisionCalculatorProblem public divisionCalculatorProblem;

    function divide(uint256 input1, uint256 input2) override public pure returns (uint256){
        return input1 / input2;
    }
}
