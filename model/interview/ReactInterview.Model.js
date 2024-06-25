import mongoose from "mongoose";

const reactInterviewSchema =  mongoose.Schema({
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



export const reactInterview = mongoose.model("reactinterview",reactInterviewSchema);