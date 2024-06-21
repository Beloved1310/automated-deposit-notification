const nodemailer = require('nodemailer');
const { SENDER_EMAIL, GOGGLE_PASS_KEY } = require('../config');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  auth: {
    user: SENDER_EMAIL,
    pass: GOGGLE_PASS_KEY,
  },
});

const failedDepositEmail = (email, username, amount) => {
  const data = {
    to: email,
    from: SENDER_EMAIL,
    subject: 'Failed Deposit Notification',
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Failed Deposit Notification</title>
      <style>
        body {
          background-color: #f0f5f9;
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }

        .email-container {
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          margin: 20px;
          padding: 20px;
        }

        .email-header {
          background-color: #ff4d4d;
          color: #fff;
          text-align: center;
          padding: 10px;
          border-radius: 10px 10px 0 0;
        }

        .email-content {
          padding: 20px;
        }

        p {
          color: #333;
        }

        strong {
          color: #ff4d4d;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <h2>Failed Deposit Notification</h2>
        </div>
        <div class="email-content">
          <p><strong>Hello, ${username}</strong></p>
          <p>Dear ${username}, your automated deposit of $${amount} failed due to insufficient funds. Please check your wallet.</p>
        </div>
      </div>
    </body>
    </html>`,
  };
  return data;
};

const sendFailedDepositEmail = async (email, username, amount) => {
  try {
    const info = await transporter.sendMail(failedDepositEmail(email, username, amount));
    return info;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

module.exports = sendFailedDepositEmail;
