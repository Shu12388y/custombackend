import { Router } from "express";
import { getWebDevContent } from "../controller/FeatureWebDev.controller.js";
import { postWebDevContent } from "../controller/FeatureWebDev.controller.js";

const FeatureWebDev = Router();

FeatureWebDev.get("/api/v1/webdev",getWebDevContent);
FeatureWebDev.post("/api/v1/postwebdev",postWebDevContent);




export default FeatureWebDev

