const express = require('express')
const cors = require('cors')
require('dotenv').config()
const debug = require('debug')('app')
const { PORT } = require('./config')

const app = express()
require('./startup/db')()

const deposit = require('./routes/deposit')

process.on('unhandledRejection', (err) => {
  debug(err, 'Unhandled Rejection at Promise')
  process.exit(1)
})
process.on('uncaughtException', (err) => {
  debug(err, 'Uncaught Exception thrown')
  process.exit(1)
})

app.use(cors({ origin: '*' }))

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '50mb' }))
app.use('/api/v1/deposit', deposit)

app.listen(PORT, () => {
  debug(`Web server is running ${PORT}`)
})