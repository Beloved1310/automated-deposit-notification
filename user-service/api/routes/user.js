const express = require("express");
const asyncMiddleware = require("../middleware/async");
const { userController } = require("../controller/user.controller");
const auth = require("../middleware/auth");

const router = express.Router();

// Register
router.post("/register", asyncMiddleware(userController.register));
router.post("/login", asyncMiddleware(userController.login));
router.get("/dashboard", auth, asyncMiddleware(userController.dashboard));

module.exports = router;
