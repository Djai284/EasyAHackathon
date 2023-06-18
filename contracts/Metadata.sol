
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

type NftId is uint256;

contract Metadata {
    // A mapping of tag categories to the NFT IDs which are a member of each group.
    mapping(string => NftId[]) private _tagMap; 

    // Add an NFT and its tags to the smart contract's registry.
    function updateTags(NftId nftId, string[] calldata tags) public {
        // An NFT must be given one or more tags
        require(tags.length > 0);
        for (uint i = 0; i < tags.length; i++) {
            _tagMap[tags[i]].push(nftId);
        }
    }

    function queryByTag(string calldata tag) external view returns (NftId[] memory) {
        return _tagMap[tag];
    }
}