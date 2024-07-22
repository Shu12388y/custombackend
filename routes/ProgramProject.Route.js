import express from "express";
import { getProgramProject,getPythonProject,getCProjects,getDSProjects,getFullStackProjects,getJavaProjects,getMlProjects,getReactProjects } from "../controller/ProgramProjects/programProjects.controller.js";
import { CProjects,
    DSProjects,
    FullStackProjects,
    JavaProjects,
    MlProjects,
    ReactProjects,
    PythonProject,
    programProject} from "../model/programProject/exports/programprojectexport.js";

import {postData} from "../controller/Main.Controller.js";


 

// programmer router  

const ProgramprojectRouter = express.Router();



// project routes

ProgramprojectRouter.get("/api/v1/getprogramproject",getProgramProject);
ProgramprojectRouter.post("/api/v1/postprogramproject",async(req,res)=>{
  await postData(req,res,programProject)
})


ProgramprojectRouter.get("/api/v1/getcproject",getCProjects);
ProgramprojectRouter.post("/api/v1/postcprogram",async(req,res)=>{
  await postData(req,res,CProjects);
})

// data science project routes
ProgramprojectRouter.get("/api/v1/getdsproject",getDSProjects);
ProgramprojectRouter.post("/api/v1/postdsproject",async(req,res)=>{
  await postData(req,res,DSProjects)
})


// full stack project routes
ProgramprojectRouter.get("/api/v1/getfullstackproject",getFullStackProjects);
ProgramprojectRouter.post("/api/v1/postfullstackproject",async(req,res)=>{
  await postData(req,res,FullStackProjects);
})



//  java projects routes 
ProgramprojectRouter.get("/api/v1/getjavaproject",getJavaProjects);
ProgramprojectRouter.post("/api/v1/postjavaproject",async(req,res)=>{
  await postData(req,res,JavaProjects);
})


// Machine learning projects routes  
ProgramprojectRouter.get("/api/v1/getmlproject",getMlProjects);
ProgramprojectRouter.post("/api/v1/postmlproject",async(req,res)=>{
  await postData(req,res,MlProjects);
})



// react projects routes   
ProgramprojectRouter.get("/api/v1/getreactproject",getReactProjects);
ProgramprojectRouter.post("/api/v1/postreactproject",async(req,res)=>{
  await postData(req,res,ReactProjects);
})


ProgramprojectRouter.get("/api/v1/getpythonproject",getPythonProject);
ProgramprojectRouter.post("/api/v1/postpythonproject",async(req,res)=>{
  await postData(req,res,PythonProject);
})



export default ProgramprojectRouter
