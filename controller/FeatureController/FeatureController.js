import NodeCache from "node-cache"
import {AI_MLFeature,CodingResourcesFeature,ComputerNetworkFeature,DBMS_SQLResourcesFeature,DSAHandwrittenNotesFeature,DataEngineerFeature,DataScienceFeature,DsaResourcesFeature,HRInterviewQuestionsFeature,CheetSheetFeature,ChatGPTFeature,CloudComputingFeature,OperatingSystemFeature,devopsFeature,CompaniesCodingQuestionsFeature,SystemDesignFeature,StartupListFeature,RoadMapsFeature,ResumeGuideFeature,RemoteHiringFeature,ReactFeature,Feature,webFeature,typescriptFeature,BigDataFeature,C_ProgramFeature,JavaFeature,JavaScriptFeature,NodejsFeature,OOpsFeature,PythonFeature} from "../../model/Feature/exports/featureexportmodel.js";



const nodeCache =  new NodeCache({
    stdTTL:30*60
})


// feature get function
export const getFeature = async(_req,res) =>{
   try {
     let response ;
 
     if(nodeCache.has("feature")){
         response = JSON.parse(nodeCache.get("feature"));
     }
     else{
         response = await Feature.find({}).lean()
         nodeCache.set("feature",JSON.stringify(response))
     }
     if(!response){
         return res.status(404).json({"message":"Not Found"})
     }
 
     return res.status(200).json({"data":response})
   } catch (error) {
            return res.status(500).json({"message":"server error"}) 
   }

}

// get web dev feature function
export const getwebFeature = async (_req, res) => {
    try {
        let response;

        if (nodeCache.has("webfeature")) {
            response = JSON.parse(nodeCache.get("webfeature"));
        } else {
            response = await webFeature.find({}).lean();
            nodeCache.set("webfeature", JSON.stringify(response));
        }
        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "server error" });
    }
};

// get the coding feature
export const getcodingFeature = async (_req, res) => {
    try {
        let response;

        if (nodeCache.has("codingfeature")) {
            response = JSON.parse(nodeCache.get("codingfeature"));
        } else {
            response = await CodingResourcesFeature.find({}).lean();
            nodeCache.set("codingfeature", JSON.stringify(response));
        }
        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "server error" });
    }
};

// computernetwork get function
export const getcomputernewtworkFeature = async (_req, res) => {
    try {
        let response;

        if (nodeCache.has("cnfeature")) {
            response = JSON.parse(nodeCache.get("cnfeature"));
        } else {
            response = await ComputerNetworkFeature.find({}).lean();
            nodeCache.set("cnfeature", JSON.stringify(response));
        }
        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "server error" });
    }
};

export const getDBMS_SQLResourcesFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("dbmsSQLResourcesFeatures")) {
            response = JSON.parse(nodeCache.get("dbmsSQLResourcesFeatures"));
        } else {
            response = await DBMS_SQLResourcesFeature.find({}).lean();
            nodeCache.set("dbmsSQLResourcesFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for DSAHandwrittenNotesFeature
export const getDSAHandwrittenNotesFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("dsaHandwrittenNotesFeatures")) {
            response = JSON.parse(nodeCache.get("dsaHandwrittenNotesFeatures"));
        } else {
            response = await DSAHandwrittenNotesFeature.find({}).lean();
            nodeCache.set("dsaHandwrittenNotesFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for DataEngineerFeature
export const getDataEngineerFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("dataEngineerFeatures")) {
            response = JSON.parse(nodeCache.get("dataEngineerFeatures"));
        } else {
            response = await DataEngineerFeature.find({}).lean();
            nodeCache.set("dataEngineerFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for DataScienceFeature
export const getDataScienceFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("dataScienceFeatures")) {
            response = JSON.parse(nodeCache.get("dataScienceFeatures"));
        } else {
            response = await DataScienceFeature.find({}).lean();
            nodeCache.set("dataScienceFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for DsaResourcesFeature
export const getDsaResourcesFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("dsaResourcesFeatures")) {
            response = JSON.parse(nodeCache.get("dsaResourcesFeatures"));
        } else {
            response = await DsaResourcesFeature.find({}).lean();
            nodeCache.set("dsaResourcesFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for HRInterviewQuestionsFeature
export const getHRInterviewQuestionsFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("hrInterviewQuestionsFeatures")) {
            response = JSON.parse(nodeCache.get("hrInterviewQuestionsFeatures"));
        } else {
            response = await HRInterviewQuestionsFeature.find({}).lean();
            nodeCache.set("hrInterviewQuestionsFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for CheetSheetFeature
export const getCheetSheetFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("cheetSheetFeatures")) {
            response = JSON.parse(nodeCache.get("cheetSheetFeatures"));
        } else {
            response = await CheetSheetFeature.find({}).lean();
            nodeCache.set("cheetSheetFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for ChatGPTFeature
export const getChatGPTFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("chatGPTFeatures")) {
            response = JSON.parse(nodeCache.get("chatGPTFeatures"));
        } else {
            response = await ChatGPTFeature.find({}).lean();
            nodeCache.set("chatGPTFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for CloudComputingFeature
export const getCloudComputingFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("cloudComputingFeatures")) {
            response = JSON.parse(nodeCache.get("cloudComputingFeatures"));
        } else {
            response = await CloudComputingFeature.find({}).lean();
            nodeCache.set("cloudComputingFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for OperatingSystemFeature
export const getOperatingSystemFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("operatingSystemFeatures")) {
            response = JSON.parse(nodeCache.get("operatingSystemFeatures"));
        } else {
            response = await OperatingSystemFeature.find({}).lean();
            nodeCache.set("operatingSystemFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for DevOpsFeature
export const getDevOpsFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("devOpsFeatures")) {
            response = JSON.parse(nodeCache.get("devOpsFeatures"));
        } else {
            response = await DevOpsFeature.find({}).lean();
            nodeCache.set("devOpsFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for CompaniesCodingQuestionsFeature
export const getCompaniesCodingQuestionsFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("companiesCodingQuestionsFeatures")) {
            response = JSON.parse(nodeCache.get("companiesCodingQuestionsFeatures"));
        } else {
            response = await CompaniesCodingQuestionsFeature.find({}).lean();
            nodeCache.set("companiesCodingQuestionsFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for SystemDesignFeature
export const getSystemDesignFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("systemDesignFeatures")) {
            response = JSON.parse(nodeCache.get("systemDesignFeatures"));
        } else {
            response = await SystemDesignFeature.find({}).lean();
            nodeCache.set("systemDesignFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for StartupListFeature
export const getStartupListFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("startupListFeatures")) {
            response = JSON.parse(nodeCache.get("startupListFeatures"));
        } else {
            response = await StartupListFeature.find({}).lean();
            nodeCache.set("startupListFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for RoadMapsFeature
export const getRoadMapsFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("roadMapsFeatures")) {
            response = JSON.parse(nodeCache.get("roadMapsFeatures"));
        } else {
            response = await RoadMapsFeature.find({}).lean();
            nodeCache.set("roadMapsFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for ResumeGuideFeature
export const getResumeGuideFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("resumeGuideFeatures")) {
            response = JSON.parse(nodeCache.get("resumeGuideFeatures"));
        } else {
            response = await ResumeGuideFeature.find({}).lean();
            nodeCache.set("resumeGuideFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for RemoteHiringFeature
export const getRemoteHiringFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("remoteHiringFeatures")) {
            response = JSON.parse(nodeCache.get("remoteHiringFeatures"));
        } else {
            response = await RemoteHiringFeature.find({}).lean();
            nodeCache.set("remoteHiringFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};

// Function to get all items for ReactFeature
export const getReactFeatures = async (req, res) => {
    try {
        let response;

        if (nodeCache.has("reactFeatures")) {
            response = JSON.parse(nodeCache.get("reactFeatures"));
        } else {
            response = await ReactFeature.find({}).lean();
            nodeCache.set("reactFeatures", JSON.stringify(response));
        }

        if (!response) {
            return res.status(404).json({ "message": "Not Found" });
        }

        return res.status(200).json({ "data": response });
    } catch (error) {
        return res.status(500).json({ "message": "Server Error" });
    }
};