import mongoose from "mongoose";

const CProjectSchema = mongoose.Schema({
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



export const CProjects = mongoose.model("cprojects",CProjectSchema);