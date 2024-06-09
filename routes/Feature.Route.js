import { Router } from "express";
// import { getFeatureController } from "../controller/Feature.controller.js";
// import { postFeatureContoller } from "../controller/Feature.controller.js";
// import { getWebDevContent } from "../controller/FeatureWebDev.controller.js";
// import { postWebDevContent } from "../controller/FeatureWebDev.controller.js";

import { typescriptFeature } from "../model/FeatureTypeScript.Model.js";
import { Feature } from "../model/Feature.Model.js";
import { webFeature } from "../model/FeatureWebDev.Model.js";
import { getData } from "../controller/Main.Controller.js";
import { postData } from "../controller/Main.Controller.js";
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
    await getData(req,res,webFeature);
});



// typescript route

Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});







export default Featureroute