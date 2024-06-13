import mongoose from "mongoose";
import dotenv from "dotenv";

const connectToMongoDB = async()=>{
    // console.log(process.env.MONGO_DB_URI);
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to mongo db");
    } catch (error) {
        console.log("Error connecting to db",error.message);
    }
}

export default connectToMongoDB;