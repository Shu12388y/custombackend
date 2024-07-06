import mongoose from "mongoose";

const ReactProjectSchema = mongoose.Schema({
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



export const ReactProjects = mongoose.model("reactprojects",ReactProjectSchema);