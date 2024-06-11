import { Router } from "express";


import { getData, postData } from "../controller/Main.Controller.js";
import { Feature } from "../model/Feature.Model.js";
import { devopsFeature } from "../model/FeatureDevops.Model.js";
import { typescriptFeature } from "../model/FeatureTypeScript.Model.js";
import { webFeature } from "../model/FeatureWebDev.Model.js";


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

Featureroute.post("/api/v1/devops", async (req, res) => {
    await postData(req, res, devopsFeature);
});



// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});



// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});




// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});




// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});




// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});




// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});




// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});




// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});





// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});




// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});





// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});





// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});





// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});






// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});





// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});




// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});





// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});





// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});





// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});





// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});





// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});






// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});




// typescript route
Featureroute.get("/api/v1/typescript", async (req, res) => {
    await getData(req, res, typescriptFeature);
});

Featureroute.post("/api/v1/typescript", async (req, res) => {
    await postData(req, res, typescriptFeature);
});









export default Featureroute