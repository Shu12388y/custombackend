import { Router } from "express";


import { getData, postData } from "../controller/Main.Controller.js";
import { Feature } from "../model/Feature.Model.js";
import { devopsFeature } from "../model/FeatureDevops.Model.js";
import { typescriptFeature } from "../model/FeatureTypeScript.Model.js";
import { webFeature } from "../model/FeatureWebDev.Model.js";
import { BigDataFeature } from './../model/Feature.BigData.Model.js';
import { C_ProgramFeature } from './../model/Feature.C_Program.Model.js';
import { ChatGPTFeature } from './../model/Feature.ChatGPT.Model.js';
import { CheetSheetFeature } from './../model/Feature.CheetSheet.Model.js';
import { CodingResourcesFeature } from './../model/Feature.CodingResources.Model.js';
import { ComputerNetworkFeature } from './../model/Feature.ComputerNetwork.model.js';
import { DataEngineerFeature } from './../model/Feature.DataEngineer.Model.js';
import { DataScienceFeature } from './../model/Feature.DataScience.Model.js';
import { DBMS_SQLResourcesFeature } from './../model/Feature.DBMS_SQLResources.Model.js';
import { DSAHandwrittenNotesFeature } from './../model/Feature.DSAHandwrittenNotes.Model.js';
import { DsaResourcesFeature } from './../model/Feature.DsaResources.Model.js';
import { HRInterviewQuestionsFeature } from './../model/Feature.HRInterviewQuestions.Model.js';
import { JavaFeature } from './../model/Feature.Java.Model.js';
import { JavaScriptFeature } from './../model/Feature.JavaScript.Model.js';
import { NodejsFeature } from './../model/Feature.Nodejs.Model.js';
import { OOpsFeature } from './../model/Feature.OOps.Model.js';
import { PythonFeature } from './../model/Feature.Python.Model.js';
import { ReactFeature } from './../model/Feature.React.Model.js';
import { RemoteHiringFeature } from './../model/Feature.RemoteHiring.Model.js';
import { ResumeGuideFeature } from './../model/Feature.ResumeGuide.Model.js';
import { RoadMapsFeature } from './../model/Feature.RoadMaps.Model.js';
import { StartupListFeature } from './../model/Feature.StartupList.Model.js';
import { SystemDesignFeature } from './../model/Feature.SystemDesign.Model.js';
import { CompaniesCodingQuestionsFeature } from './../model/FeatureCompaniesCodingQuestions.Model.js';
import { OperatingSystemFeature } from './../model/Featured.OperatingSystem.Model.js';
import { CloudComputingFeature } from './../model/Feaure.CloudComputing.Model.js';


const Featureroute = Router()



Featureroute.get("/api/v1/feature",async(req,res)=>{
    await getData(req,res,Feature);
})
Featureroute.post("/api/v1/postfeature",async(req,res)=>{
    await postData(req,res,Feature);
})


// web devlopment route
Featureroute.get("/api/v1/webdev",async(req,res)=>{
    await getData(req,res,webFeature);
});
Featureroute.post("/api/v1/postwebdev",async(req,res)=>{
    await postData(req,res,webFeature);
});


// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/posttypescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});


// devops route
Featureroute.get("/api/v1/devops", async (req, res) => {
    await getData(req, res, devopsFeature);
});

Featureroute.post("/api/v1/postdevops", async (req, res) => {
    await postData(req, res, devopsFeature);
});


// AI_ML route
Featureroute.get("/api/v1/AI_ML", async (req, res) => {
    await getData(req, res, AI_MLFeature);
});

Featureroute.post("/api/v1/POSTAI_ML", async (req, res) => {
    await postData(req, res, AI_MLFeature);
});


// BigData route
Featureroute.get("/api/v1/BigData", async (req, res) => {
    await getData(req, res, BigDataFeature);
});

Featureroute.post("/api/v1/postBigData", async (req, res) => {
    await postData(req, res, BigDataFeature);
});


// C_Progran route
Featureroute.get("/api/v1/C_Program", async (req, res) => {
    await getData(req, res, C_ProgramFeature);
});

Featureroute.post("/api/v1/postC_Program", async (req, res) => {
    await postData(req, res, C_ProgramFeature);
});


// chatgpt route
Featureroute.get("/api/v1/ChatGPT", async (req, res) => {
    await getData(req, res, ChatGPTFeature);
});

Featureroute.post("/api/v1/postChatGPT", async (req, res) => {
    await postData(req, res, ChatGPTFeature);
});


// CheetSheet route
Featureroute.get("/api/v1/CheetSheet", async (req, res) => {
    await getData(req, res, CheetSheetFeature);
});

Featureroute.post("/api/v1/postCheetSheet", async (req, res) => {
    await postData(req, res, ChatGPTFeature);
});


// CodingResources route
Featureroute.get("/api/v1/CodingResources", async (req, res) => {
    await getData(req, res, CodingResourcesFeature);
});

Featureroute.post("/api/v1/postCodingResources", async (req, res) => {
    await postData(req, res, CodingResourcesFeature);
});


// ComputerNetwork route
Featureroute.get("/api/v1/ComputerNetwork", async (req, res) => {
    await getData(req, res, ComputerNetworkFeature);
});

Featureroute.post("/api/v1/postComputerNetwork", async (req, res) => {
    await postData(req, res, ComputerNetworkFeature);
});


// DataEngineer route
Featureroute.get("/api/v1/DataEngineer", async (req, res) => {
    await getData(req, res, DataEngineerFeature);
});

Featureroute.post("/api/v1/postDataEngineer", async (req, res) => {
    await postData(req, res, DataEngineerFeature);
});


// DataScience route
Featureroute.get("/api/v1/DataScience", async (req, res) => {
    await getData(req, res, DataScienceFeature);
});

Featureroute.post("/api/v1/postDataEngineer", async (req, res) => {
    await postData(req, res, DataScienceFeature);
});


// DBMS_SQLResources route
Featureroute.get("/api/v1/DBMS_SQLResources", async (req, res) => {
    await getData(req, res, DBMS_SQLResourcesFeature);
});

Featureroute.post("/api/v1/postDBMS_SQLResources", async (req, res) => {
    await postData(req, res, DBMS_SQLResourcesFeature);
});


// DSAHandWrittenNotes route
Featureroute.get("/api/v1/DSAHandWrittenNotes", async (req, res) => {
    await getData(req, res, DSAHandwrittenNotesFeature);
});

Featureroute.post("/api/v1/DSAHandWrittenNotes", async (req, res) => {
    await postData(req, res, DSAHandwrittenNotesFeature);
});


// DsaResources route
Featureroute.get("/api/v1/DsaResources", async (req, res) => {
    await getData(req, res, DsaResourcesFeature);
});

Featureroute.post("/api/v1/DsaResources", async (req, res) => {
    await postData(req, res, DsaResourcesFeature);
});


// HRInterviewQuestions route
Featureroute.get("/api/v1/HRInterviewQuestions", async (req, res) => {
    await getData(req, res, HRInterviewQuestionsFeature);
});

Featureroute.post("/api/v1/postHRInterviewQuestions", async (req, res) => {
    await postData(req, res, HRInterviewQuestionsFeature);
});


// Java route
Featureroute.get("/api/v1/Java", async (req, res) => {
    await getData(req, res, JavaFeature);
});

Featureroute.post("/api/v1/postJava", async (req, res) => {
    await postData(req, res, JavaFeature);
});


// JavaScript route
Featureroute.get("/api/v1/JavaScript", async (req, res) => {
    await getData(req, res, JavaScriptFeature);
});

Featureroute.post("/api/v1/postJavaScript", async (req, res) => {
    await postData(req, res, JavaScriptFeature);
});


// Nodejs route
Featureroute.get("/api/v1/Nodejs", async (req, res) => {
    await getData(req, res, NodejsFeature);
});

Featureroute.post("/api/v1/postNodejs", async (req, res) => {
    await postData(req, res, NodejsFeature);
});


// OOps route
Featureroute.get("/api/v1/OOps", async (req, res) => {
    await getData(req, res, OOpsFeature);
});

Featureroute.post("/api/v1/postOOps", async (req, res) => {
    await postData(req, res, OOpsFeature);
});

// Python route
Featureroute.get("/api/v1/Python", async (req, res) => {
    await getData(req, res, PythonFeature);
});

Featureroute.post("/api/v1/postPython", async (req, res) => {
    await postData(req, res, PythonFeature);
});


// React route
Featureroute.get("/api/v1/React", async (req, res) => {
    await getData(req, res, ReactFeature);
});

Featureroute.post("/api/v1/postReact", async (req, res) => {
    await postData(req, res, ReactFeature);
});


// RemoteHiring route
Featureroute.get("/api/v1/RemoteHiring", async (req, res) => {
    await getData(req, res, RemoteHiringFeature);
});

Featureroute.post("/api/v1/postRemoteHiring", async (req, res) => {
    await postData(req, res, RemoteHiringFeature);
});


// ResumeGuide route
Featureroute.get("/api/v1/ResumeGuide", async (req, res) => {
    await getData(req, res, ResumeGuideFeature);
});

Featureroute.post("/api/v1/postResumeGuide", async (req, res) => {
    await postData(req, res, ResumeGuideFeature);
});


// RoadMaps route
Featureroute.get("/api/v1/RoadMaps", async (req, res) => {
    await getData(req, res, RoadMapsFeature);
});

Featureroute.post("/api/v1/postRoadMaps", async (req, res) => {
    await postData(req, res, RoadMapsFeature);
});


// StartupList route
Featureroute.get("/api/v1/StartupList", async (req, res) => {
    await getData(req, res, StartupListFeature);
});

Featureroute.post("/api/v1/postStartupList", async (req, res) => {
    await postData(req, res, StartupListFeature);
});


// SystemDesign route
Featureroute.get("/api/v1/SystemDesign", async (req, res) => {
    await getData(req, res, SystemDesignFeature);
});

Featureroute.post("/api/v1/postSystemDesign", async (req, res) => {
    await postData(req, res, SystemDesignFeature);
});


// CompaniesCodingQuestions route
Featureroute.get("/api/v1/CompaniesCodingQuestions", async (req, res) => {
    await getData(req, res, CompaniesCodingQuestionsFeature);
});

Featureroute.post("/api/v1/postCompaniesCodingQuestions", async (req, res) => {
    await postData(req, res, CompaniesCodingQuestionsFeature);
});


// OperatingSystem route
Featureroute.get("/api/v1/OperatingSystem", async (req, res) => {
    await getData(req, res, OperatingSystemFeature);
});

Featureroute.post("/api/v1/postOperatingSystem", async (req, res) => {
    await postData(req, res, OperatingSystemFeature);
});


// CloudComputing route
Featureroute.get("/api/v1/CloudComputing", async (req, res) => {
    await getData(req, res, CloudComputingFeature);
});

Featureroute.post("/api/v1/postCloudComputing", async (req, res) => {
    await postData(req, res, CloudComputingFeature);
});

export default Featureroute