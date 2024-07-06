import mongoose from "mongoose";

const JavaProjectSchema = mongoose.Schema({
    name:{
        type:String
    },
    imageUrl:{
        type:String
    },
    link:{
        type:String
    }
},{timestamps:true})



export const JavaProjects = mongoose.model("javaprojects",JavaProjectSchema);