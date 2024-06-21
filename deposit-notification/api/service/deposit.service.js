const ValidationError = require("../../../user-service/api/utilis/validation.error");
const { depositRepository } = require("../repository/deposit.repository");
const sendFailedDepositEmail = require("../utilis/failed-notification-email");

const depositService = {
  async handleProcessDeposit(value) {
    const {
      user: { _id: userId, email, username },
      walletAmount,
      amountDeposit,
    } = value;
    console.log(userId, email, username, walletAmount, amountDeposit);

    if (walletAmount < amountDeposit) {
      sendFailedDepositEmail(email, username, amountDeposit);
      throw new ValidationError(
        "Failed Deposit, Please credit your wallet account"
      );
    }``
    const savedwallet = await depositRepository.createdeposit({
      amountDeposit,
      userId,
    });
    return savedwallet;
  },
};

module.exports = {
  depositService,
};
