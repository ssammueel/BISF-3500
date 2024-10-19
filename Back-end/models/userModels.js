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
    },
    password:{
        type:String,
        required:true
    },
    confirm:{
        type:String,
        required:true
    }
    
},{timestamps:true})

const userModel = mongoose.model("users", userSchema)

export default userModel;

// in the validation make sure the the scripts cant be irted limit the input
