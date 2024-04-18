const sendMail=require('../middleware/email')
module.exports.messageSend= (req,res)=>{
    const {email,message,name}=req.body;

    if(!email){
        return res.status(200).json({message:'no data'})
    }else{

        sendMail.mailoption.to=process.env.Email;
        sendMail.mailoption.html=`<div style="margin: auto; width: 800px;background-color: #65c13e; padding:10px;border-radius:25px">
        <div style="width: 80%;  margin: auto; text-align:left;">
            <h2 style=" background-color: aliceblue;text-align:center">Message</h2>
            <hr>
            <div >
                <p style="color:white"><strong>Name :</strong><em>${name}</em></p>
                <p style="color:white"><strong>Email :</strong><em>${email}</em></p>
                <p style="color:white"><strong>Message :</strong><em>${message}</em></p>    
            </div>  
        </div>`;
        sendMail.mailoption.subject='message';
        sendMail.sendMail(sendMail.mailoption)
        return res.status(200).json({message:'success'})
    }


}