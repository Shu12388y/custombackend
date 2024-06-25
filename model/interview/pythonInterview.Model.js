import mongoose from "mongoose";

const pythonInterviewSchema =  mongoose.Schema({
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



export const pythonInterview = mongoose.model("pythoninterview",pythonInterviewSchema);