const dotenv = require('dotenv')

dotenv.config()
const { env } = process

module.exports = {
  PORT: env.PORT || 6080,
  MONGODBURI: env.MONGODBURI,
  JWT: env.JWT,
  WALLET_ENDPOINT: env.WALLET_ENDPOINT,
  SENDER_EMAIL: env.SENDER_EMAIL,
  GOGGLE_PASS_KEY: env.GOGGLE_PASS_KEY
}