const cron = require('node-cron');
const sendFailedDepositEmail = require("../utilis/failed-notification-email");

// Schedule the cron job to run every day at midnight
cron.schedule('0 0 * * *', () => {
    console.log('Running cron job for missed deposit notifications...');
    sendFailedDepositEmail();
});
