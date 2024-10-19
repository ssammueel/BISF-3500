import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        enum:["admin","pentester","responder"],
        required: true
    },
    email:{
        required:[true,"please use the work email"],
        trim:true,
        unique:true,
        lowercase:true,
    }
},{timestamps:true})

const userModel = mongoose.model("users", userSchema)

export default userModel;