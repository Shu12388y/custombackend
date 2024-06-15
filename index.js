import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import { connectDatabase } from "./db/db.js";
import dotenv from "dotenv";
import Featureroute from "./routes/Feature.Route.js";
import helmet from "helmet";
import { limiter } from "./rateLimiter/limit.js";
import EmailRouter from "./routes/Email.Route.js";
import VideoRouter from "./routes/Video.Route.js";
import RoadMapRouter from "./routes/RoadMap.Route.js";
import HealthRoute from "./routes/Health.Route.js";
import cluster from "node:cluster"
import os from "node:os"


dotenv.config({
    path: '.env'
})

if (cluster.isMaster) {
    let cpuCount = os.cpus().length;
    console.log(cpuCount)
    for (let i = 0; i < cpuCount; i++) {
        cluster.fork()

    }
    cluster.on('exit', function (worker) {
        console.log(worker.id)
        cluster.fork()
    })

}
else {
    const app = express();


    app.use(cors({
        origin: ['http://localhost:3000', 'https://letsresource.in']
    }));


    app.use(limiter)
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json({ limit: "100kb" }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '100kb' }));
    app.use(helmet());

    app.set('trust proxy', 'loopback, 100.20.92.101');

    // routes 
    app.use(Featureroute)
    app.use(EmailRouter)
    app.use(VideoRouter)
    app.use(RoadMapRouter)
    app.use(HealthRoute)



    connectDatabase().then(() => {
        app.listen(process.env.PORT, () => {
            console.log("server is on", process.env.PORT || 3000)
        })
    }).catch((error) => {
        console.log(error)
    })
}


