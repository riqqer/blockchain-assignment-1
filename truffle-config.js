module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default)
      port: 8545,        // Ganache default port
      network_id: "*",   // Match any network id
    },
  },

  // Optional: Set Solidity version
  compilers: {
    solc: {
      version: "^0.8.0",
    },
  },
};