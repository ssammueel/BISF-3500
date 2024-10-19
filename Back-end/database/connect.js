import mongoose from "mongoose";

export const connectDb = async() =>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("the database is connectes sucessfully")
    } catch (error) {
        console.log("hey there was error in database connestion")
    }
}