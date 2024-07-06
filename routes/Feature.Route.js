import { Router } from "express";
import { AI_MLFeature, CodingResourcesFeature, ComputerNetworkFeature, DBMS_SQLResourcesFeature, DSAHandwrittenNotesFeature, DataEngineerFeature, DataScienceFeature, DsaResourcesFeature, HRInterviewQuestionsFeature, CheetSheetFeature, ChatGPTFeature, CloudComputingFeature, OperatingSystemFeature, devopsFeature, CompaniesCodingQuestionsFeature, SystemDesignFeature, StartupListFeature, RoadMapsFeature, ResumeGuideFeature, RemoteHiringFeature, ReactFeature, Feature, webFeature, typescriptFeature, BigDataFeature, C_ProgramFeature, JavaFeature, JavaScriptFeature, NodejsFeature, OOpsFeature, PythonFeature } from "../model/Feature/exports/featureexportmodel.js";

import { postData } from "../controller/Main.Controller.js";
import {
    getaiFeatures,
    getFeature,
    getwebFeature,
    getDBMS_SQLResourcesFeatures,
    getDSAHandwrittenNotesFeatures,
    getDataEngineerFeatures,
    getDataScienceFeatures,
    getDsaResourcesFeatures,
    getHRInterviewQuestionsFeatures,
    getCheetSheetFeatures,
    getChatGPTFeatures,
    getCloudComputingFeatures,
    getOperatingSystemFeatures,
    getDevopsFeatures,
    getCompaniesCodingQuestionsFeatures,
    getSystemDesignFeatures,
    getStartupListFeatures,
    getRoadMapsFeatures,
    getResumeGuideFeatures,
    getRemoteHiringFeatures,
    getReactFeatures,
    getTypescriptFeatures,
    getBigDataFeatures,
    getC_ProgramFeatures,
    getJavaFeatures,
    getJavaScriptFeatures,
    getNodejsFeatures,
    getOOpsFeatures,
    getPythonFeatures,
    getcodingFeature,
    getcomputernewtworkFeature
} from "../controller/FeatureController/FeatureController.js";


const Featureroute = Router()


/*

*/

Featureroute.get("/api/v1/feature", getFeature)
Featureroute.post("/api/v1/postfeature", async (req, res) => {
    await postData(req, res, Feature);
})

Featureroute.get("/api/v1/webdev", getwebFeature);

Featureroute.post("/api/v1/postwebdev", async (req, res) => {
    await postData(req, res, webFeature);
});


// typescript route
Featureroute.get("/api/v1/typescript", getTypescriptFeatures);

Featureroute.post("/api/v1/posttypescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});


// devops route
Featureroute.get("/api/v1/devops", getDevopsFeatures);

Featureroute.post("/api/v1/postdevops", async (req, res) => {
    await postData(req, res, devopsFeature);
});


// AI_ML route
Featureroute.get("/api/v1/ai", getaiFeatures);

Featureroute.post("/api/v1/POSTAI_ML", async (req, res) => {
    await postData(req, res, AI_MLFeature);
});


// BigData route
Featureroute.get("/api/v1/bigdata", getBigDataFeatures);

Featureroute.post("/api/v1/postBigData", async (req, res) => {
    await postData(req, res, BigDataFeature);
});


// C_Progran route
Featureroute.get("/api/v1/cpluplus", getC_ProgramFeatures);

Featureroute.post("/api/v1/postC_Program", async (req, res) => {
    await postData(req, res, C_ProgramFeature);
});


// chatgpt route
Featureroute.get("/api/v1/chatgpt", getChatGPTFeatures);

Featureroute.post("/api/v1/postChatGPT", async (req, res) => {
    await postData(req, res, ChatGPTFeature);
});


// CheetSheet route
Featureroute.get("/api/v1/cheetSheets", getCheetSheetFeatures);

Featureroute.post("/api/v1/postCheetSheet", async (req, res) => {
    await postData(req, res, CheetSheetFeature);
});


// CodingResources route
Featureroute.get("/api/v1/coding", getcodingFeature);

Featureroute.post("/api/v1/postCodingResources", async (req, res) => {
    await postData(req, res, CodingResourcesFeature);
});


// ComputerNetwork route
Featureroute.get("/api/v1/cn", getcomputernewtworkFeature);

Featureroute.post("/api/v1/postComputerNetwork", async (req, res) => {
    await postData(req, res, ComputerNetworkFeature);
});


// DataEngineer route
Featureroute.get("/api/v1/dataengineer", getDataEngineerFeatures);

Featureroute.post("/api/v1/postDataEngineer", async (req, res) => {
    await postData(req, res, DataEngineerFeature);
});


// DataScience route
Featureroute.get("/api/v1/ds", getDataScienceFeatures);

Featureroute.post("/api/v1/postDataEngineer", async (req, res) => {
    await postData(req, res, DataScienceFeature);
});


// DBMS_SQLResources route
Featureroute.get("/api/v1/dbms", getDBMS_SQLResourcesFeatures);

Featureroute.post("/api/v1/postDBMS_SQLResources", async (req, res) => {
    await postData(req, res, DBMS_SQLResourcesFeature);
});


// DSAHandWrittenNotes route
Featureroute.get("/api/v1/dsahandwritten", getDSAHandwrittenNotesFeatures);

Featureroute.post("/api/v1/DSAHandWrittenNotes", async (req, res) => {
    await postData(req, res, DSAHandwrittenNotesFeature);
});


// DsaResources route
Featureroute.get("/api/v1/dsaguide", getDsaResourcesFeatures);

Featureroute.post("/api/v1/DsaResources", async (req, res) => {
    await postData(req, res, DsaResourcesFeature);
});


// HRInterviewQuestions route
Featureroute.get("/api/v1/hr", getHRInterviewQuestionsFeatures);

Featureroute.post("/api/v1/postHRInterviewQuestions", async (req, res) => {
    await postData(req, res, HRInterviewQuestionsFeature);
});


// Java route
Featureroute.get("/api/v1/java", getJavaFeatures);

Featureroute.post("/api/v1/postJava", async (req, res) => {
    await postData(req, res, JavaFeature);
});


// JavaScript route
Featureroute.get("/api/v1/js", getJavaScriptFeatures);

Featureroute.post("/api/v1/postJavaScript", async (req, res) => {
    await postData(req, res, JavaScriptFeature);
});


// Nodejs route
Featureroute.get("/api/v1/nodejs", getNodejsFeatures);

Featureroute.post("/api/v1/postNodejs", async (req, res) => {
    await postData(req, res, NodejsFeature);
});


// OOps route
Featureroute.get("/api/v1/oops", getOOpsFeatures);

Featureroute.post("/api/v1/postOOps", async (req, res) => {
    await postData(req, res, OOpsFeature);
});

// Python route
Featureroute.get("/api/v1/python", getPythonFeatures);

Featureroute.post("/api/v1/postPython", async (req, res) => {
    await postData(req, res, PythonFeature);
});


// React route
Featureroute.get("/api/v1/react", getReactFeatures);

Featureroute.post("/api/v1/postReact", async (req, res) => {
    await postData(req, res, ReactFeature);
});


// RemoteHiring route
Featureroute.get("/api/v1/remoteresource", getRemoteHiringFeatures);

Featureroute.post("/api/v1/postRemoteHiring", async (req, res) => {
    await postData(req, res, RemoteHiringFeature);
});


// ResumeGuide route
Featureroute.get("/api/v1/resume", getResumeGuideFeatures);

Featureroute.post("/api/v1/postResumeGuide", async (req, res) => {
    await postData(req, res, ResumeGuideFeature);
});


// RoadMaps route
Featureroute.get("/api/v1/RoadMaps", getRoadMapsFeatures);

Featureroute.post("/api/v1/postRoadMaps", async (req, res) => {
    await postData(req, res, RoadMapsFeature);
});


// StartupList route
Featureroute.get("/api/v1/startup", getStartupListFeatures);

Featureroute.post("/api/v1/postStartupList", async (req, res) => {
    await postData(req, res, StartupListFeature);
});


// SystemDesign route
Featureroute.get("/api/v1/systemdesign", getSystemDesignFeatures);

Featureroute.post("/api/v1/postSystemDesign", async (req, res) => {
    await postData(req, res, SystemDesignFeature);
});


// CompaniesCodingQuestions route
Featureroute.get("/api/v1/companiesqs", getCompaniesCodingQuestionsFeatures);

Featureroute.post("/api/v1/postCompaniesCodingQuestions", async (req, res) => {
    await postData(req, res, CompaniesCodingQuestionsFeature);
});


// OperatingSystem route
Featureroute.get("/api/v1/os", getOperatingSystemFeatures);

Featureroute.post("/api/v1/postOperatingSystem", async (req, res) => {
    await postData(req, res, OperatingSystemFeature);
});


// CloudComputing route
Featureroute.get("/api/v1/cloud", getCloudComputingFeatures);

Featureroute.post("/api/v1/postCloudComputing", async (req, res) => {
    await postData(req, res, CloudComputingFeature);
});

export default Featureroute
