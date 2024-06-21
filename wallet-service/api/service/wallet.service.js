const { walletRepository } = require("../repository/wallet.repository");
const ValidationError = require("../utilis/validation.error");

const walletService = {
  async createwallet(createwallet) {
    const { userId, amount: IncomingAmount } = createwallet;
    const wallet = await walletRepository.getWallet(userId);
    if(wallet){
      createwallet.amount = wallet.amount + IncomingAmount
    }

    const savedwallet = await walletRepository.createWallet({
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
