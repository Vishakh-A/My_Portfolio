const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{

        user:process.env.USER_NAME,
        pass:process.env.EMAIL_PASS
    }
});

module.exports.sendMail = (mailOptions)=>{

    transport.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err);
        }else{
            console.log('success');
        }
    })

}

module.exports.mailoption ={
    from:{
        name:'Message',
        address:process.env.USER_NAME
    },
    to:'',
    subject:'',
    html:``
}