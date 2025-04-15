import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true,   // it makes searchable 
        trim: true // it removes trailling white-spaces
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true  
    },
    fullName : {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        unique: true
    },
    refreshToken: {
        type: String
    }  

}, {timestamps: true})


export const User = mongoose.model("User", userSchema); 