const Wallet = require("../model/wallet.model");

const walletRepository = {
  async getWallet(userId) {
    const wallet = await Wallet.findOne({ userId }).select("-__v ");
    return wallet;
  },
  async getOneWalletData(item) {
    const Wallet = await Wallet.findOne(item).select("-__v");
    return Wallet;
  },

  async getWalletById(id) {
    const Wallet = await Wallet.findById(id).select("-__v");
    return Wallet;
  },

  async getWallets(query) {
    const Wallet = await Wallet.find(query).select("-__v");
    return Wallet;
  },
  async createWallet(createWallet) {
    const wallet = await Wallet.create(createWallet);
    return wallet;
  },
  async updateWalletData(queryParams, fields) {
    return Wallet.updateOne(fields, {
      $set: queryParams,
    });
  },
};

module.exports = {
  walletRepository,
};
