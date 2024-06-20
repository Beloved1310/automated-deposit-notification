const dotenv = require('dotenv')

dotenv.config()
const { env } = process

module.exports = {
  PORT: env.PORT || 7080,
  MONGODBURI: env.MONGODBURI,
  JWT: env.JWT,
}