pragma solidity ^0.8.0;

// ETH 송금하고 받기 문제
contract ReceiveEtherFunctionProblem {
    event ReceivedEvent(address, uint);
    address payable public contractAddress; // 이더를 돌려받을 컨트랙트 주소

	// 이더를 돌려받을 컨트랙트 주소 설정하기
    function setReceiveEtherAddress(address payable _contractAddress) public {
        require(_contractAddress.code.length > 0, "_contractAddress is not Contract");
        contractAddress = _contractAddress;
    }

	// 이더리움을 받기위해서 추가로 구현된 함수가 존재합니다.
    receive() external payable {
        //이더 받기~
        emit ReceivedEvent(msg.sender, msg.value);
    }
}