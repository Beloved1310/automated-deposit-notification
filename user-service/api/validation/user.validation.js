const Joi = require("joi");

const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]*)(?=.*[!@#$%^&*_-])(?=.{8,})"
);

const userValidation = {
  create: Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email(),
    phoneNumber: Joi.string().allow("").optional(),
    password: Joi.string()
      .pattern(passwordRegex)
      .max(70)
      .messages({
        "string.pattern.match": '"password" must be stronger',
        "string.pattern.base":
          'The "password" must meet the specified criteria: at least one lowercase letter, one uppercase letter, one digit, one special character, and a minimum length of 8 characters.',
      })
      .required(),
  }),

  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(passwordRegex)
      .max(70)
      .messages({
        "string.pattern.match": '"password" must be stronger',
        "string.pattern.base":
          'The "password" must meet the specified criteria: at least one lowercase letter, one uppercase letter, one digit, one special character, and a minimum length of 8 characters.',
      })
      .required(),
  }),
};

module.exports = { userValidation };
