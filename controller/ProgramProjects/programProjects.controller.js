import { programProject,PythonProject,CProjects,DSProjects,MlProjects,JavaProjects,ReactProjects,FullStackProjects } from "../../model/programProject/exports/programprojectexport.js";
import NodeCache from "node-cache";



const nodeCache = new NodeCache({
    stdTTL:30*60
})

export const getProgramProject = async(_req,res)=>{
    try {
        let response;
        if(nodeCache.has("programproject")){
            response = JSON.parse(nodeCache.get("programproject"))
        }
        else{
            response = await programProject.find({}).lean()
            nodeCache.set("programproject",JSON.stringify(response))
        }

        if(!response){
            return res.status(404).json({"message":"Not Found"})
        }
        return res.status(200).json({"data":response})
        
    } catch (error) {
        return res.status(500).json({"message":"server error"})
    }
}



export const getCProjects = async (_req, res) => {
    try {
        let data;
        if (nodeCache.has("cprojects")) {
            data = JSON.parse(nodeCache.get("cprojects"));
        } else {
            data = await CProjects.find({}).lean();
            nodeCache.set("cprojects", JSON.stringify(data));
        }

        if (!data) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": data });
    } catch (error) {
        return res.status(500).json({ "message": "error" });
    }
}



export const getDSProjects = async (_req, res) => {
    try {
        let data;
        if (nodeCache.has("dsprojects")) {
            data = JSON.parse(nodeCache.get("dsprojects"));
        } else {
            data = await DSProjects.find({}).lean();
            nodeCache.set("dsprojects", JSON.stringify(data));
        }

        if (!data) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": data });
    } catch (error) {
        return res.status(500).json({ "message": "error" });
    }
}


export const getMlProjects = async (_req, res) => {
    try {
        let data;
        if (nodeCache.has("mlprojects")) {
            data = JSON.parse(nodeCache.get("mlprojects"));
        } else {
            data = await MlProjects.find({}).lean();
            nodeCache.set("mlprojects", JSON.stringify(data));
        }

        if (!data) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": data });
    } catch (error) {
        return res.status(500).json({ "message": "error" });
    }
}



export const getJavaProjects = async (_req, res) => {
    try {
        let data;
        if (nodeCache.has("javaprojects")) {
            data = JSON.parse(nodeCache.get("javaprojects"));
        } else {
            data = await JavaProjects.find({}).lean();
            nodeCache.set("javaprojects", JSON.stringify(data));
        }

        if (!data) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": data });
    } catch (error) {
        return res.status(500).json({ "message": "error" });
    }
}


export const getReactProjects = async (_req, res) => {
    try {
        let data;
        if (nodeCache.has("reactprojects")) {
            data = JSON.parse(nodeCache.get("reactprojects"));
        } else {
            data = await ReactProjects.find({}).lean();
            nodeCache.set("reactprojects", JSON.stringify(data));
        }

        if (!data) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": data });
    } catch (error) {
        return res.status(500).json({ "message": "error" });
    }
}


export const getFullStackProjects = async (_req, res) => {
    try {
        let data;
        if (nodeCache.has("fullstackprojects")) {
            data = JSON.parse(nodeCache.get("fullstackprojects"));
        } else {
            data = await FullStackProjects.find({}).lean();
            nodeCache.set("fullstackprojects", JSON.stringify(data));
        }

        if (!data) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": data });
    } catch (error) {
        return res.status(500).json({ "message": "error" });
    }
}


export const getPythonProject = async(_req,res) =>{
    try {
        let data;
        if (nodeCache.has("pythonprojects")) {
            data = JSON.parse(nodeCache.get("pythonprojects"));
        } else {
            data = await PythonProject.find({}).lean();
            nodeCache.set("pythonprojects", JSON.stringify(data));
        }

        if (!data) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": data });
    } catch (error) {
        return res.status(500).json({ "message": "error" });
    }
}