const axios = require("axios");
const { WALLET_ENDPOINT } = require("../config");

const fetchWalletAmount = async (token) => {
  try {
    const response = await axios.get(WALLET_ENDPOINT, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const {
      data: {
        data: {
          wallet: { amount },
        },
      },
    } = response;
    return amount;
  } catch (error) {
    console.error("Failed to fetch wallet amount:", error);
    throw error;
  }
};

module.exports = {
  fetchWalletAmount,
};
