import mongoose from "mongoose";

const PythonProjectSchema = mongoose.Schema({
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



export const PythonProject = mongoose.model("pythonprojects",PythonProjectSchema);