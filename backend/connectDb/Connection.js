

const mongoose=require('mongoose')


const ConnectDb=async()=>{
    try {
        const connect=await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected")
        
    } catch (error) {
        console.log("There is an error");
        
    }
}

module.exports=ConnectDb