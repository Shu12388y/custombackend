import NodeCache from "node-cache";
import { webFeature } from "../model/Feature/FeatureWebDev.Model.js";
import { Feature } from "../model/Feature/Feature.Model.js";
import { typescriptFeature } from "../model/Feature/FeatureTypeScript.Model.js";

const nodeCache = new NodeCache({
    stdTTL: 60 * 60
});

const models = {
    webFeature:webFeature,
    Favourite:Feature,
    typescriptbFeature:typescriptFeature
    // Add other models here
};

// Model names mapping
const modelnames = {
    webFeature:'webFeature',
    Favourite: 'Feature',
    typescriptbFeature:'typescriptFeature'
    // Add other models here
};



export async function getData(_req, res, modelName) {
    try {
        if (!modelName) {
            return res.status(500).json({ "message": "modelName is required" });
        }
        console.log(modelName)
        const modelNameStr = typeof modelName === 'string' ? modelName : modelName.modelName;
        console.log(`Processed modelName: ${modelNameStr}`);

        const model = models[modelNameStr];
        const name = modelnames[modelNameStr];

        if (!model || !name) {
            return res.status(400).json({ "message": "Invalid model name" });
        }
         const cacheKey = name.toLowerCase(); // Use the model's name as the cache key, converted to lowercase
        let data;

        if (nodeCache.has(cacheKey)) {
            console.log(`Cache hit for ${cacheKey}`);
            data = JSON.parse(nodeCache.get(cacheKey));
        } else {
            console.log(`Cache miss for ${cacheKey}`);
            data = await model.find({}).lean(); // Use .lean() to get plain JavaScript objects
            nodeCache.set(cacheKey, JSON.stringify(data));
        }

        if (!data) {
            return res.status(500).json({ "message": "server is error or model is not loaded" });
        }

        return res.status(200).json({ "data": data });

    } catch (error) {
        return res.status(500).json({ "error": "An error occurred", "details": error.message });
    }
}


export async function postData(req,res,modelName){
    try {
        const model = await modelName
       if(!model){
        return res.json({"message":"model is not loaded"}).status(500)
       }
       const {name,imageUrl,link} = await req.body;
       if(![name && imageUrl]){
        return res.json({"message":"feild are required"});
       } 
       const createModel = await new model({
        name,
        imageUrl,
        link
       })
       if(!createModel){
        return res.json({"message":"server error model is not created"}).status(500)
       } 
       await createModel.save()
       return res.json({"message":"data created"}).status(200)
    } catch (error) {
        return res.json({"message":"error"}).status(500)
    }
}