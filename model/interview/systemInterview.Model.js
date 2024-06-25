import mongoose from "mongoose";

const systemInterviewSchema =  mongoose.Schema({
    name:{
        type:String
    },
    imageUrl:{
        type:String
    },
    link:{
        type:String
    }

})



export const systemInterview = mongoose.model("systeminterview",systemInterviewSchema);