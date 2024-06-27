import express from "express";
import {getData, postData} from "../controller/Main.Controller.js"
import {CloudRoadmap,
    DevopsRoadmap,
    DERoadmap,
    DSRoadmap,
    JavaRoadmap,
    JavaScriptRoadmap,
    PowerBiRoadmap,
    PythonRoadmap,
    Roadmap,
    WebDevRoadmap} from "../model/Roadmap/exports/roadmapexport.js";

import {getCloudRoadmapFeatures,
    getDevopsRoadmapFeatures,
    getDERoadmapFeatures,
    getDSRoadmapFeatures,
    getJavaRoadmapFeatures,
    getJavaScriptRoadmapFeatures,
    getPowerBiRoadmapFeatures,
    getPythonRoadmapFeatures,
    getRoadmapFeatures,
    getWebDevRoadmapFeatures} from "../controller/RoadmapController/RoadmapController.js";



const RoadMapRouter = express.Router();

// get the roadmaps
RoadMapRouter.get("/api/v1/roadmaps",getRoadmapFeatures)
RoadMapRouter.post("/api/v1/postroadmaps",async(req,res)=>{
    await postData(req,res,Roadmap)
})


// roadmaps routes web dev

RoadMapRouter.get("/api/v1/webdevroadmap",getWebDevRoadmapFeatures);
RoadMapRouter.post("/api/v1/postwebdevroadmap",async(req,res)=>{
    await postData(req,res,WebDevRoadmap)
})

// roadmaps routes python

RoadMapRouter.get("/api/v1/pythonroadmap",getPythonRoadmapFeatures)

RoadMapRouter.post("/api/v1/postpythonroadmap",async(req,res)=>{
    await postData(req,res,PythonRoadmap)
})


// roadmaps routes powerbi

RoadMapRouter.get("/api/v1/powerbiroadmap",getPowerBiRoadmapFeatures)

RoadMapRouter.post("/api/v1/postpowerbiroadmap",async(req,res)=>{
    await postData(req,res,PowerBiRoadmap)
})


// roadmaps routes Javascript

RoadMapRouter.get("/api/v1/jsroadmap",getJavaScriptRoadmapFeatures)

RoadMapRouter.post("/api/v1/postjsroadmap",async(req,res)=>{
    await postData(req,res,JavaScriptRoadmap)
})


// roadmap routes java 
RoadMapRouter.get("/api/v1/javaroadmap",getJavaRoadmapFeatures)

RoadMapRouter.post("/api/v1/postjavaroadmap",async(req,res)=>{
    await postData(req,res,JavaRoadmap)
})



// roadmap routes  devops 
RoadMapRouter.get("/api/v1/devopsroadmap",getDevopsRoadmapFeatures)

RoadMapRouter.post("/api/v1/postdevopsroadmap",async(req,res)=>{
    await postData(req,res,DevopsRoadmap)
})


// roadmap routes data science

RoadMapRouter.get("/api/v1/dsroadmap",getDSRoadmapFeatures)

RoadMapRouter.post("/api/v1/postdsroadmap",async(req,res)=>{
    await postData(req,res,DSRoadmap)
})



// roadmap routes cloud
RoadMapRouter.get("/api/v1/cloudroadmap",getCloudRoadmapFeatures)

RoadMapRouter.post("/api/v1/postcloudroadmap",async(req,res)=>{
    await postData(req,res,CloudRoadmap)
})


// roadmap routes data engineer
RoadMapRouter.get("/api/v1/deroadmap",getDERoadmapFeatures)

RoadMapRouter.post("/api/v1/postderoadmap",async(req,res)=>{
    await getData(req,res,DERoadmap)
})








export default RoadMapRouter