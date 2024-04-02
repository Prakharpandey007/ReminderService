const TicketService=require('../services/email-service');

const create=async (req,res)=>{
    try {
       const response=await TicketService.createNotification(req.body);
    //    console.log("before the controller")
    //    console.log(response);
    //    console.log("after the controller")
       return res.status(201).json({
        success:true,
        data:response,
        message:'successfully registered a email reminder'
       }) 
    } catch (error) {
        return res.status(500).json({
            success:true,
            data:response,
            err:error,
            message:'unable to  registered a email reminder'
           }) 
        
    }
}
module.exports={
    create
}