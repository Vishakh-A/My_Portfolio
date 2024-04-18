const mongoose=require('mongoose')

const messageSchema=new mongoose.Schema({
    email:{
        type:String,
        required:True
    }
})
module.export=new mongoose.model('Message',messageSchema)