module.exports = {
  networks: {
      development: {
          host: "127.0.0.1",  // Адрес Ganache
          port: 7545,         // Порт Ganache
          network_id: "5777", // NETWORK ID Ganache
          gas: 8000000, // Увеличьте лимит газа
          gasPrice: 20000000000, // Цена газа (Wei)
      },
  },
  compilers: {
      solc: {
          version: "^0.8.0", // Версия Solidity
      },
  },
};
