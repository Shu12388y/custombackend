import { webFeature } from "../model/FeatureWebDev.Model.js";



export const getWebDevContent = async(req,res)=>{
    try {
        const response = await webFeature.find()
    if(!response){
        return res.json({"message":"server error"}).status(500)

    }
    return res.json({"data":response}).status(200)
    } catch (error) {
        return res.json({"message":"error"}).status(500)
        
    } 
}



export const postWebDevContent = async(req,res) =>{
    try {
       const {name,imageUrl,link} = await req.body
       
       if(![name && imageUrl]){
        return res.json({"message":"field are empty"}).status(404)
       }
       const webModel =  await new webFeature({
        name,
        imageUrl,
        link
       })

       if(!webModel){
        return res.json({"message":"server error"}).status(500)
       }

       await webModel.save()


       return res.json({"message":"data saved"}).status(200)
    } catch (error) {
        return res.json({"message":"error"}).status(500)
    }
}