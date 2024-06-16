import express from "express";
import {getData, postData} from "../controller/Main.Controller.js"
import { Roadmap } from "../model/Roadmap/RoadMap.Model.js";
import { WebDevRoadmap } from "../model/Roadmap/WebDevRoadMap.Model.js";

const RoadMapRouter = express.Router();

// get the roadmaps
RoadMapRouter.get("/api/v1/roadmaps",async(req,res)=>{
       await getData(req,res,Roadmap)    
})
RoadMapRouter.post("/api/v1/postroadmaps",async(req,res)=>{

    await postData(req,res,Roadmap)
})


// roadmaps routes web dev

RoadMapRouter.get("/api/v1/webdevroadmap",async(req,res)=>{
    await getData(req,res,WebDevRoadmap)
});
RoadMapRouter.post("/api/v1/postwebdevroadmap",async(req,res)=>{
    await postData(req,res,WebDevRoadmap)
})

// roadmaps routes python

RoadMapRouter.get("/api/v1/pythonroadmap",async(req,res)=>{
    await getData(req,res,PythonRoadmap)
})

RoadMapRouter.post("/api/v1/postpythonroadmap",async(req,res)=>{
    await postData(req,res,PythonRoadmap)
})


// roadmaps routes powerbi

RoadMapRouter.get("/api/v1/powerbiroadmap",async(req,res)=>{
    await getData(req,res,PowerBiRoadmap)
})

RoadMapRouter.post("/api/v1/postpowerbiroadmap",async(req,res)=>{
    await postData(req,res,PowerBiRoadmap)
})


// roadmaps routes Javascript

RoadMapRouter.get("/api/v1/jsroadmap",async(req,res)=>{
    await getData(req,res,JavaScriptRoadmap)
})

RoadMapRouter.post("api/v1/postjsroadmap",async(req,res)=>{
    await postData(req,res,JavaScriptRoadmap)
})


// roadmap routes java 
RoadMapRouter.get("/api/v1/javaroadmap",async(req,res)=>{
    await getData(req,res,JavaRoadmap)
})

RoadMapRouter.post("/api/v1/postjavaroadmap",async(req,res)=>{
    await postData(req,res,JavaRoadmap)
})



// roadmap routes  devops 
RoadMapRouter.get("/api/v1/devopsroadmap",async(req,res)=>{
    await getData(req,res,DevopsRoadmap)
})

RoadMapRouter.post("/api/v1/postdevopsroadmap",async(req,res)=>{
    await postData(req,res,DevopsRoadmap)
})


// roadmap routes data science

RoadMapRouter.get("/api/v1/dsroadmap",async(req,res)=>{
    await getData(req,res,DataScienceRoadmap)
})

RoadMapRouter.post("/api/v1/postdsroadmap",async(req,res)=>{
    await postData(req,res,DataScienceRoadmap)
})



// roadmap routes cloud
RoadMapRouter.get("api/v1/cloudroadmap",async(req,res)=>{
    await getData(req,res,CloudRoadmap)

})

RoadMapRouter.post("/api/v1/postcloudroadmap",async(req,res)=>{
    await postData(req,res,CloudRoadmap)
})


// roadmap routes data engineer
RoadMapRouter.get("/api/v1/deroadmap",async(req,res)=>{
    await getData(req,res,DataEngineerRoadmap)
})

RoadMapRouter.post("/api/v1/postderoadmap",async(req,res)=>{
    await getData(req,res,DataEngineerRoadmap)
})








export default RoadMapRouter