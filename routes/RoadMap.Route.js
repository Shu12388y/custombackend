import express from "express";
import {getData, postData} from "../controller/Main.Controller.js"
import { Roadmap } from "../model/Roadmap/RoadMap.Model.js";

const RoadMapRouter = express.Router();

// get the roadmaps
RoadMapRouter.get("/api/v1/roadmaps",async(req,res)=>{
       await getData(req,res,Roadmap)    
})
RoadMapRouter.post("/api/v1/postroadmaps",async(req,res)=>{

    await postData(req,res,Roadmap)
})







export default RoadMapRouter