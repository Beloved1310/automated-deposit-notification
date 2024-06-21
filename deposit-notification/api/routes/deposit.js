const express = require("express");
const asyncMiddleware = require("../middleware/async");
const { depositController } = require("../controller/deposit.controller");
const auth = require("../middleware/auth");

const router = express.Router();

// Register
router.post("/", auth, asyncMiddleware(depositController.processDeposit));


module.exports = router;
