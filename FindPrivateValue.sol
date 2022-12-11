// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FindPrivateValue {
    uint256 private secret;
    uint256 public value;

    constructor(uint256 _secret) {
        secret = _secret;
    }

    function setValue(uint256 _value) public {
        value = _value;
    }

    function isSame() public view returns (bool) {
        return value == secret;
    }
}

// 푸는 방법은 아래와 같다.
// 1. 접근자가 private여도 web3.js의 getStorageAt 메소드로 값을 가져올 수 있다.
// 2. 가져온 값은 hex 값이므로 web3.js의 hexToNumber 메소드로 10진수로 바꿔준다.
// 3. setValue로 값을 저장하면 끝.
contract Key {
    FindPrivateValue public findPrivateValue;

    constructor(address _problemAddress) {
        findPrivateValue = FindPrivateValue(_problemAddress);
    }

    function setValue(uint256 _value) public {
        findPrivateValue.setValue(_value);
    }

    function getValue() public view returns (uint256) {
        return findPrivateValue.value();
    }

    function getIsSame() public view returns (bool) {
        return findPrivateValue.isSame();
    }
}