// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CauseKoin is ERC20 {
    address public owner;

    // Modified constructor to accept name, symbol, and decimals
    constructor( ) ERC20("causeKoin", "CK") {
        owner = msg.sender;

        // Mint the initial supply of tokens to the owner
        _mint(msg.sender, 100000 * (10 ** 18));
    }
    
    function mint(uint256 _amount) external {
        require(msg.sender == owner, "You are not the owner");
        _mint(msg.sender, _amount * 10 ** decimals());
    }


   //CauseKoinModule#CauseKoin - 0x2d6829Bd5e2635aFf778DA6FC3891CAB5C1145D0
    
}
