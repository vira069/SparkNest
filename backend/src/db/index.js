import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log(`\n DataBase connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("DataBase connection Failed!!: ", error);
        throw error
        process.exit(1);
    }
};

export default connectDB;