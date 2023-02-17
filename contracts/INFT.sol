// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

interface iEvicttion {
    function safeMint(address to, string memory uri) external;

    function tokenURI(uint256 tokenId) external;

    function supportsInterface(bytes4 interfaceId) external;
}
