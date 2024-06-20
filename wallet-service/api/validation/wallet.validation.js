const Joi = require("joi");

const walletValidation = {
  create: Joi.object({
    amount: Joi.string().required(),
  }),
};

module.exports = { walletValidation };
