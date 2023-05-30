import mongoose from "mongoose";

const url=''
const Connection= async ()=>{
    try {
        await mongoose.connect(url,{useUnifiedTopology:true})
    } catch (error) {
        console.log('Error connecting to database - ',error)
    }
}