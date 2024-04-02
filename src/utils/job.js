const cron = require("node-cron");
const emailService = require("../services/email-service");
const sender = require("../config/email-config");
/**
 * 10:00am
 * Every 5 minute 
 * We will check are their any pending emails which was expected to be sent by now and is pending

 */

const setupJobs = () => {
  cron.schedule('*/2 * * * *', async () => {
    //sending emails at every 5 minutes
    //add logic
    const response = await emailService.fetchPendingEmails();
    response.forEach((email) => {
      sender.sendMail(
        {
          to: email.recepientEmail,
          subject: email.subject,
          text: email.content,
        },
        async (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
            await emailService.updateTicket(email.id, {
              status: "SUCCESS"
            });
          }
        }
      );
    });
    console.log(response);
  });
};

module.exports = setupJobs;

