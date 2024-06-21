const Joi = require("joi");

const depositValidation = {
  create: Joi.object({
    amountDeposit: Joi.number().required(),
  }),
};

module.exports = { depositValidation };
