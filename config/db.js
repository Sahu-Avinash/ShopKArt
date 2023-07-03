import mongoose from "mongoose";

const connectDB = async()=>
{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to MongoDb Database ${conn.connect.host}`) 
    } catch (error) {
        console.log(`Error in mongodb ${error}`)
    }
}

export default connectDB;
