const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { JWT } = require("../config");

const UserSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wallet", UserSchema);
