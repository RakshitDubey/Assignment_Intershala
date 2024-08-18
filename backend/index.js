

const express=require('express')
const app=express()
const dotenv=require('dotenv')
const cors=require('cors')
const ConnectDb=require('./connectDb/Connection')
dotenv.config()


const cardRoutes=require('./routes/cardRoutes')


app.use(cors())
app.use(express.json())


app.get('/ping',(req,res)=>{
    res.send("Server is running")
})
app.use(cardRoutes)
const port=process.env.PORT||5000
app.listen(port,()=>{
    ConnectDb()
    console.log("server is running");
    
})