import mongoose from "mongoose";

const MlProjectSchema = mongoose.Schema({
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



export const MlProjects = mongoose.model("mlprojects",MlProjectSchema);