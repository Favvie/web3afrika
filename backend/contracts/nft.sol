// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNft is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
     constructor() ERC721("causeKoinNft", "CKN") Ownable(msg.sender) {}
     string uri;

    function safeMint(address to, uint256 tokenId)
        public
        onlyOwner
    {   
        uri = "https://violet-major-ocelot-686.mypinata.cloud/ipfs/QmPjACyCpF2sB6DaYRjWgKToEhspNvSzKGLLJjc3vucYbQ";
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}