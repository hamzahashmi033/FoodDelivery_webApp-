import mongoose from "mongoose";

export const connectDB = async()=>{
    const {connection} = await mongoose.connect(process.env.MONGOOSE_URI)
    console.log("Database is connected to " + connection.host )
}