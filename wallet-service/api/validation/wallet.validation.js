const Joi = require("joi");

const walletValidation = {
  create: Joi.object({
    amount: Joi.number().required(),
  }),
};

module.exports = { walletValidation };
