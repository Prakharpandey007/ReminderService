const express=require('express');
const bodyparser=require('body-parser');
const {PORT}=require('./config/serverconfig');
// const {sendBasicEmail}=require('./services/email-service');

const bodyParser = require('body-parser');
const cron=require('node-cron');
const setupAndStartServer=()=>{
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyparser.urlencoded({
        extended:true
    })
    );
    app.listen(PORT,()=>{
console.log(`Server started at Port ${PORT}`);
// sendBasicEmail(
//     'support@admin.com',
//     'developerxnew@gmail.com',
//     'This is a texting email',
//     'Hey,how are you,I hope u like the support'
// );
cron.schedule('*/2 * * * *', () => {
    console.log('running a task every two minutes');
  });


    });
}
setupAndStartServer();



