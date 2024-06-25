import express from "express";
import { Interview } from "../model/interview/Interview.Model.js";
import {getData,postData} from "../controller/Main.Controller.js";
import { webInterview } from "../model/interview/webInterview.Model.js";
import { systemInterview } from "../model/interview/systemInterview.Model.js";
import { pythonInterview } from "../model/interview/pythonInterview.Model.js";
import { reactInterview } from "../model/interview/ReactInterview.Model.js";



const interviewRoute = express.Router();




interviewRoute.get("/api/v1/interview",async(req,res)=>{
    await getData(req,res,Interview)
});

interviewRoute.post("/api/v1/postinterview",async(req,res)=>{
    await postData(req,res,Interview)
});



interviewRoute.get("/api/v1/webinterview",async(req,res)=>{
    await getData(req,res,webInterview)
});

interviewRoute.post("/api/v1/postwebinterview",async(req,res)=>{
    await postData(req,res,Interview)
});

interviewRoute.get("/api/v1/systeminterview",async(req,res)=>{
    await getData(req,res,systemInterview)
});

interviewRoute.post("/api/v1/postsysteminterview",async(req,res)=>{
    await postData(req,res,systemInterview)
});


interviewRoute.get("/api/v1/pythoninterview",async(req,res)=>{
    await getData(req,res,pythonInterview)
});

interviewRoute.post("/api/v1/postpythoninterview",async(req,res)=>{
    await postData(req,res,pythonInterview)
});


interviewRoute.get("/api/v1/reactinterview",async(req,res)=>{
    await getData(req,res,reactInterview)
});

interviewRoute.post("/api/v1/postreactinterview",async(req,res)=>{
    await postData(req,res,reactInterview)
});













export default interviewRoute;

