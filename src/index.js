const express=require('express');
const bodyparser=require('body-parser');
const {PORT}=require('./config/serverconfig');
// const {sendBasicEmail}=require('./services/email-service');
// const {createChanel}=require('./utils/messageQueue')
const bodyParser = require('body-parser');
// const { Utils } = require('sequelize');
// const cron=require('node-cron');
// const jobs=require('./utils/job');
const TicketController=require('./controllers/ticket-controller');
const setupAndStartServer=async ()=>{
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyparser.urlencoded({
        extended:true
    })
    );
    app.post('/api/v1/ticket',TicketController.create);
    // const channel=await createChanel();
    // subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);
    
    app.listen(PORT,()=>{
console.log(`Server started at Port ${PORT}`);
// jobs();

// sendBasicEmail(
//     'support@admin.com',
//     'developerxnew@gmail.com',
//     'This is a texting email',
//     'Hey,how are you,I hope u like the support'
// );
// cron.schedule('*/2 * * * *', () => {
//     console.log('running a task every two minutes');
//   });


    });
}
setupAndStartServer();




