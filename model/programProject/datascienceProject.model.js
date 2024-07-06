import mongoose from "mongoose";

const DSProjectSchema = mongoose.Schema({
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



export const DSProjects = mongoose.model("dsprojects",DSProjectSchema);