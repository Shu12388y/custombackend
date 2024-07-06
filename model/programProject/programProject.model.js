import mongoose from "mongoose";


const programProjectSchmea = mongoose.Schema({
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



export const programProject =  mongoose.model("programproject",programProjectSchmea);