const Web3 = require("web3");

// Подключение к Ganache
const web3 = new Web3("http://127.0.0.1:7545");

// ABI и адрес контракта
const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const contractAddress = "0x238D2f3da559A647f63Dc359776F90FDF7578f39"; // Адрес контракта после развертывания

const contract = new web3.eth.Contract(abi, contractAddress);

async function interact() {
    const accounts = await web3.eth.getAccounts();

    // Проверить баланс контракта
    const balance = await contract.methods.getBalance().call();
    console.log("Баланс контракта:", web3.utils.fromWei(balance, "ether"), "ETH");

    // Отправить Ether в контракт
    await web3.eth.sendTransaction({
        from: accounts[0],
        to: contractAddress,
        value: web3.utils.toWei("1", "ether"),
    });

    // Вывести средства
    await contract.methods.withdrawAll().send({ from: accounts[0] });
    console.log("Средства выведены!");
}

interact();
