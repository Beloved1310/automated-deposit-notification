const { depositValidation } = require("../validation/deposit.validation");
const { depositService } = require("../service/deposit.service");
const ResponseService = require("../service/reponse.service");
const { fetchWalletAmount } = require("../external/wallet.service");

const depositController = {
  async processDeposit(req, res) {
    const token = req.header("authorization").replace("Bearer ", "");
    if (!token)
      return res.status(401).send("Access denied. No token provided.");
    const walletAmount = await fetchWalletAmount(token);
    const { value, error } = depositValidation.create.validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });
    value.walletAmount = walletAmount;
    value.user = req.user;

    const deposit = await depositService.handleProcessDeposit(value);
    return ResponseService.success(res, "Deposit made Successfully", deposit);
  },
};

module.exports = { depositController };
