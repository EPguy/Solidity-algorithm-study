// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IRunWithABI2 {
    function getPrivateKey() external view returns (bytes32);
}

contract RunWithABI2Problem {
    bytes32 private privateKey; // 비밀키 저장 변수
    IRunWithABI2 Iinstance;
    function setRunWithABI2(address _RunWithABI2) public {
        Iinstance = IRunWithABI2(_RunWithABI2);
    }
}

// delegateCall는 호출한 컨트랙트에서 실행된다.
// 그래서 delegateCall는 해당 컨트랙트의 변수에 값을 할당하는게 아닌 delegateCall을 호출한 컨트랙트의 변수에 값을 할당하는 특징이있다. 또한 msg.sender, msg.value도 바뀌지 않는다.
contract MyRunWithABI2 is IRunWithABI2{
    bytes32 private privateKey;


    function setProblem(address _problemAddress, bytes memory methodId) public {
        (bool success1, ) = _problemAddress.call(methodId); // 1. 문제 Contract에 privateKey 생성
        (bool success2, ) = _problemAddress.delegatecall(methodId); // 2.정답 Contract의 privateKey 변수에 문제 Contract의 privateKey 탈취하여 설정
        if(!success1 || !success2) {
            revert();
        }
    }

    // 채점을 위한 함수 입니다.
    function getPrivateKey() external override view returns (bytes32) {
        return privateKey;
    }
}
