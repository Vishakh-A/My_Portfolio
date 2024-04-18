require('dotenv').config()
const path=require('path')
const express =require('express');
const bodyParser=require('body-parser')
const cors=require('cors')

const app= express();
const port=8000;

const messageRoute=require('./routes/message.route')


app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'dist/browser')))

app.use('/api/message',messageRoute)
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/browser/index.html'))
})


app.listen(port,()=>{
    console.log(`server start at port : ${port}`);
})
