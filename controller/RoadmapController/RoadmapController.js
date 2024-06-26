import {CloudRoadmap,
    DevopsRoadmap,
    DERoadmap,
    DSRoadmap,
    JavaRoadmap,
    JavaScriptRoadmap,
    PowerBiRoadmap,
    PythonRoadmap,
    Roadmap,
    WebDevRoadmap} from "../../model/Roadmap/exports/roadmapexport.js";

import NodeCache from "node-cache";

const nodeCache = new NodeCache({
    stdTTL:60*60
})



// Function to get all items for CloudRoadmap
export const getCloudRoadmapFeatures = async (req, res) => {
    try {
        let response;

        // Example caching with node-cache
        if (nodeCache.has("cloudRoadmapFeatures")) {
            response = JSON.parse(nodeCache.get("cloudRoadmapFeatures"));
        } else {
            response = await CloudRoadmap.find({}).lean();
            nodeCache.set("cloudRoadmapFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for DevopsRoadmap
export const getDevopsRoadmapFeatures = async (req, res) => {
    try {
        let response;

        // Example caching with node-cache
        if (nodeCache.has("devopsRoadmapFeatures")) {
            response = JSON.parse(nodeCache.get("devopsRoadmapFeatures"));
        } else {
            response = await DevopsRoadmap.find({}).lean();
            nodeCache.set("devopsRoadmapFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for DERoadmap
export const getDERoadmapFeatures = async (req, res) => {
    try {
        let response;

        // Example caching with node-cache
        if (nodeCache.has("deRoadmapFeatures")) {
            response = JSON.parse(nodeCache.get("deRoadmapFeatures"));
        } else {
            response = await DERoadmap.find({}).lean();
            nodeCache.set("deRoadmapFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for DSRoadmap
export const getDSRoadmapFeatures = async (req, res) => {
    try {
        let response;

        // Example caching with node-cache
        if (nodeCache.has("dsRoadmapFeatures")) {
            response = JSON.parse(nodeCache.get("dsRoadmapFeatures"));
        } else {
            response = await DSRoadmap.find({}).lean();
            nodeCache.set("dsRoadmapFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for JavaRoadmap
export const getJavaRoadmapFeatures = async (req, res) => {
    try {
        let response;

        // Example caching with node-cache
        if (nodeCache.has("javaRoadmapFeatures")) {
            response = JSON.parse(nodeCache.get("javaRoadmapFeatures"));
        } else {
            response = await JavaRoadmap.find({}).lean();
            nodeCache.set("javaRoadmapFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for JavaScriptRoadmap
export const getJavaScriptRoadmapFeatures = async (req, res) => {
    try {
        let response;

        // Example caching with node-cache
        if (nodeCache.has("javaScriptRoadmapFeatures")) {
            response = JSON.parse(nodeCache.get("javaScriptRoadmapFeatures"));
        } else {
            response = await JavaScriptRoadmap.find({}).lean();
            nodeCache.set("javaScriptRoadmapFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for PowerBiRoadmap
export const getPowerBiRoadmapFeatures = async (req, res) => {
    try {
        let response;

        // Example caching with node-cache
        if (nodeCache.has("powerBiRoadmapFeatures")) {
            response = JSON.parse(nodeCache.get("powerBiRoadmapFeatures"));
        } else {
            response = await PowerBiRoadmap.find({}).lean();
            nodeCache.set("powerBiRoadmapFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for PythonRoadmap
export const getPythonRoadmapFeatures = async (req, res) => {
    try {
        let response;

        // Example caching with node-cache
        if (nodeCache.has("pythonRoadmapFeatures")) {
            response = JSON.parse(nodeCache.get("pythonRoadmapFeatures"));
        } else {
            response = await PythonRoadmap.find({}).lean();
            nodeCache.set("pythonRoadmapFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for Roadmap
export const getRoadmapFeatures = async (req, res) => {
    try {
        let response;

        // Example caching with node-cache
        if (nodeCache.has("roadmapFeatures")) {
            response = JSON.parse(nodeCache.get("roadmapFeatures"));
        } else {
            response = await Roadmap.find({}).lean();
            nodeCache.set("roadmapFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for WebDevRoadmap
export const getWebDevRoadmapFeatures = async (req, res) => {
    try {
        let response;

        // Example caching with node-cache
        if (nodeCache.has("webDevRoadmapFeatures")) {
            response = JSON.parse(nodeCache.get("webDevRoadmapFeatures"));
        } else {
            response = await WebDevRoadmap.find({}).lean();
            nodeCache.set("webDevRoadmapFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};
