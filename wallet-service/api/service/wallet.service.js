const { walletRepository } = require("../repository/wallet.repository");
const bcrypt = require("bcrypt");
const ValidationError = require("../utilis/validation.error");
const ConflictError = require("../utilis/conflict.error");

const walletService = {
  async createwallet(createwallet) {
    // const { userId } = createwallet;
    // const wallet = await walletRepository.getWallet(userId);

    const savedwallet = await walletRepository.createwallet({
      ...createwallet,
    });
    return savedwallet;
  },

  async getwallet(walletId) {
    const wallet = await walletRepository.getWallet(walletId);
    if (!wallet) throw new ValidationError("wallet amount not found");
    return { wallet };
  },
};

module.exports = {
  walletService,
};
