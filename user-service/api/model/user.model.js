const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { JWT } = require("../config");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    // wallets:
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Wallet",
    //   },
  },
  { timestamps: true }
);

UserSchema.methods.generateAuthToken = function generatedToken() {
  const token = jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
      phoneNumber: this.phoneNumber,
    },
    JWT
  );
  return token;
};

module.exports = mongoose.model("User", UserSchema);
