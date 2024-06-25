import mongoose from "mongoose";

const InterviewSchema =  mongoose.Schema({
    name:{
        type:String,
    },
    imageUrl:{
        type:String

    },
    link:{
        type:String
    }
})



export const Interview  =  mongoose.model("interview",InterviewSchema);