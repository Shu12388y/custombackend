import mongoose from "mongoose";

const FullStackProjectSchema = mongoose.Schema({
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



export const FullStackProjects = mongoose.model("fullstackprojects",FullStackProjectSchema);