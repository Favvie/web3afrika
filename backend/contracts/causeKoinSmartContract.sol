// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract CauseKoinSmartContract{
    IERC20 public causeKoin;  // ERC20 Token (CauseKoin)
    IERC721 public contributionNFT;  // ERC721 NFT (MyNFT)

    uint256 public constant tokensPerClaim = 100 * (10 ** 18); // 100 CauseKoin tokens
    mapping(address => bool) public hasClaimed;  // Track users who have already claimed tokens

    event TokensClaimed(address indexed claimant, uint256 amount);

    constructor(address _tokenAddress, address _nftAddress) {
        causeKoin = IERC20(_tokenAddress);
        contributionNFT = IERC721(_nftAddress);
    }

     // Owner deposits tokens into the contract for future claims
    function depositTokens(uint256 _amount) external {
        require(causeKoin.transferFrom(msg.sender, address(this), _amount), "Token deposit failed");
    }

    // Function for users to claim tokens if they own an NFT
    function claimTokens() public {
        // Ensure the user owns at least one NFT
        require(contributionNFT.balanceOf(msg.sender) > 0, "You must own an NFT to claim tokens");
        // Ensure the user hasn't already claimed tokens
        require(!hasClaimed[msg.sender], "You have already claimed your tokens");

        // Mark that the user has claimed
        hasClaimed[msg.sender] = true;

        // Transfer tokens to the user
        require(causeKoin.transfer(msg.sender, tokensPerClaim), "Token transfer failed");

        emit TokensClaimed(msg.sender, tokensPerClaim);
    }

    // In case the contract runs out of tokens, the owner can withdraw remaining tokens
    function withdrawTokens(uint256 _amount) external {
        require(causeKoin.transfer(msg.sender, _amount), "Token withdrawal failed");
    }

    // View how many tokens are held by this contract
    function contractTokenBalance() public view returns (uint256) {
        return causeKoin.balanceOf(address(this));
    }
}