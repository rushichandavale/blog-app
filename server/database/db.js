
import mongoose from "mongoose";
import colors from "colors";

const Connection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB Database ${mongoose.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`mongoDB Error ${error}`.bgRed.white)
    }
}

export default Connection;
