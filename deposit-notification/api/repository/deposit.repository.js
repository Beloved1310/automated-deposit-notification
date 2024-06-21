const Deposit = require("../model/deposit.model");

const depositRepository = {
  async getdeposit(userId) {
    const deposit = await Deposit.findOne({ userId }).select("-__v ");
    return deposit;
  },
  async getOnedepositData(item) {
    const deposit = await Deposit.findOne(item).select("-__v");
    return deposit;
  },

  async getdepositById(id) {
    const deposit = await Deposit.findById(id).select("-__v");
    return deposit;
  },

  async getdeposits(query) {
    const deposit = await Deposit.find(query).select("-__v");
    return deposit;
  },
  async createdeposit(createdeposit) {
    const deposit = await Deposit.create(createdeposit);
    return deposit;
  },
  async updatedepositData(queryParams, fields) {
    return Deposit.updateOne(fields, {
      $set: queryParams,
    });
  },
};

module.exports = {
  depositRepository,
};
