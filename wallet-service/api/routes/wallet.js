const express = require("express");
const asyncMiddleware = require("../middleware/async");
const { walletController } = require("../controller/wallet.controller");
const auth = require("../middleware/auth");

const router = express.Router();

// Register
router.post("/", auth, asyncMiddleware(walletController.addAmount));
router.get("/", auth, asyncMiddleware(walletController.getWalletBalance));


module.exports = router;
