const fs = require("fs");
const ethers = require("ethers");

const data = fs.readFileSync(process.env.DATA_PATH).toString("utf-8");

const wallet = ethers.Wallet.fromEncryptedJsonSync(
  data,
  process.env.WALLET_PASSWORD
);

console.log("Private Key: ", wallet.privateKey);
console.log("Address: ", wallet.address);
console.log("Public Key: ", wallet.publicKey);
