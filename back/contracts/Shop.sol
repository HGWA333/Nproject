// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Shop {
  mapping(address => uint) public shops;

  function buy() public payable {
    require(msg.value >= 10 ** 18);
    shops[msg.sender] += 1;
  }

  function sell() public payable {
    shops[msg.sender] -= 1;
    payable(msg.sender).transfer(10 ** 18);
  }

  function get() public view returns (uint) {
    return shops[msg.sender];
  }

  function getSender() public view returns (address) {
    return msg.sender;
  }
}
