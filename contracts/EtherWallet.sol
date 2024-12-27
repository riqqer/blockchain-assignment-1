// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EtherWallet {
    address public owner;

    // Конструктор для задания владельца контракта
    constructor() {
        owner = msg.sender;
    }

    // Функция для приема Ether
    receive() external payable {}

    // Функция для проверки баланса контракта
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // Функция для вывода всех средств владельцем
    function withdrawAll() public {
        require(msg.sender == owner, "Only the owner can withdraw funds");
        payable(owner).transfer(address(this).balance);
    }
}
