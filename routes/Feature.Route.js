import { Router } from "express";
import { getFeatureController } from "../controller/Feature.controller.js";
import { postFeatureContoller } from "../controller/Feature.controller.js";

const Featureroute = Router()



Featureroute.get("/api/v1/feature",getFeatureController)

Featureroute.post("/api/v1/postfeature",postFeatureContoller)





export default Featureroute