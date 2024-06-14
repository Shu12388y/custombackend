import mongoose from "mongoose";

const EmailSchema = mongoose.Schema({
    userEmail:{
        type:String
    },
    userName:{
        type:String
    },
    topic:{
        type:String
    },
    subject:{
        type:String
    },
    message:{
        type:String
    }
},{timestamps:true})


export const EmailModel =  mongoose.model("emailmodel",EmailSchema);