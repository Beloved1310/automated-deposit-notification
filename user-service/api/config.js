const dotenv = require('dotenv')

dotenv.config()
const { env } = process

module.exports = {
  PORT: env.PORT || 8080,
  MONGODBURI: env.MONGODBURI,
  JWT: env.JWT,
}