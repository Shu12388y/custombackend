import { Feature } from "../model/Feature.Model.js"

export const getFeatureController = async(req,res)=>{
        try {
            const response = await Feature.find({})
            if(!response){
                return res.json({"message":"server error"}).status(404)
            }
            return res.json({"data":response}).status(200)           
        } catch (error) {
            return res.json({"message":error}).status(error.statusCode)
            
        }
}



export const postFeatureContoller = async(req,res)=>{
    try {

    const {name,imageUrl,link} = await req.body
    
    if(![name && imageUrl]){
        return res.json({"message":"field are empty"}).status(404)
    }

    const featureModel = await new Feature({
        name,
        imageUrl,
        link
    }) 

    if(!featureModel){
        return res.json({"message":"sever error"}).status(500)
    }

    await featureModel.save()

    return res.json({"message":"data is saved"}).status(201)
        
    } catch (error) {
        return res.json({"message":"error"}).status(error.statusCode)
    }

}