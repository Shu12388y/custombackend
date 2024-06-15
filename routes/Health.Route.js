import express from "express"


const HealthRoute = express.Router()



HealthRoute.get("/health",async(req,res)=>{
    return res.status(200).json({"message":"sucess"})
})




export default HealthRoute