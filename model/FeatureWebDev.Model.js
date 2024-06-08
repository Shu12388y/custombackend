import mongoose from "mongoose";


const FeatureWebDevModel = mongoose.Schema({
    name:{
        type:String
    },
    imageUrl:{
        type:String
    },
    link:{
        type:String
    }
},{timeStamp:true})




export const webFeature = mongoose.model('webFeature',FeatureWebDevModel)