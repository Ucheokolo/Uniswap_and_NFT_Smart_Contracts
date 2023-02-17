// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

interface IToken {
    function approve(address _spender, uint256 _value) external;

    function balanceOf(address who) external view returns (uint256);

    function allowance(address _owner, address _spender)
        external
        returns (uint256 remaining);
}
