const express=require('express');
const bodyparser=require('body-parser');
const {PORT}=require('./config/serverconfig');
const bodyParser = require('body-parser');

const setupAndStartServer=()=>{
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyparser.urlencoded({
        extended:true
    })
    );
    app.listen(PORT,()=>{
console.log(`Server started at Port ${PORT}`);
    });
}
setupAndStartServer();
