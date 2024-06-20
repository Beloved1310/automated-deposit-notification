const { walletValidation } = require("../validation/wallet.validation");
const { walletService } = require("../service/wallet.service");
const { ResponseService } = require("../service/reponse.service");

const walletController = {
  async addAmount(req, res) {
    const userId = req.wallet.id
    value.userId = userId
     const { value, error } = walletValidation.create.validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });
    const data = await walletService.createwallet(value);
    return ResponseService.success(
      res,
      "Amount Successfully Added",
      data
    );
  },

  async getWalletBalance(req, res) {
    const userId = req.wallet.id
    const { amount } = await walletService.getwallet(
     userId
    );
  
    return ResponseService.success(res, "Wallet amount", amount);
  },
};

module.exports = { walletController };
