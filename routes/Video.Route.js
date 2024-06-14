import express from "express";
import {Video} from "../model/Video/Video.Model.js"
import { getData,postData } from "../controller/Main.Controller.js";



const VideoRouter = express.Router()




// get and post video card route
VideoRouter.get("/api/v1/videos",async(req,res)=>{
    await getData(req,res,Video)
});
VideoRouter.post("/api/v1/postvideo",async(req,res)=>{
    await postData(req,res,Video)
});







export default VideoRouter