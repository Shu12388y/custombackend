import mongoose from "mongoose";

const webInterviewSchema =  mongoose.Schema({
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



export const webInterview = mongoose.model("webinterview",webInterviewSchema);