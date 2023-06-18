// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


interface TagContract {
    function updateTags(uint256 nftId, string[] calldata tags) external;
}

contract MyToken is ERC721, Ownable {
    using Counters for Counters.Counter;
    string public srcUrl;
    Counters.Counter private _tokenIdCounter;
    TagContract private TagHandler;
    constructor() ERC721("MyToken", "MTK") {}

    function safeMint(address to, address tagAddr, string memory url, string[] memory tags) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        srcUrl = url;

        TagContract(tagAddr).updateTags(tokenId, tags);
    }
}