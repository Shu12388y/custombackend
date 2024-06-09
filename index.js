import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import { connectDatabase } from "./db/db.js";
import dotenv from "dotenv";
import Featureroute from "./routes/Feature.Route.js";
import helmet from "helmet";


dotenv.config({
    path:'.env'
})


const app  = express();


app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use(express.json({limit:"100kb"}));
app.use(bodyParser.urlencoded({extended:true,limit:'100kb'}));
app.use(helmet());


// routes 
app.use(Featureroute)
// app.use(FeatureWebDev)



connectDatabase().then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log("server is on",process.env.PORT || 3000)
    } )
}).catch((error)=>{
    console.log(error)
})