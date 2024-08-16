import { Resource } from "../models/Resource.model";
import { Request, Response,NextFunction } from "express";


class ResourceController{
constructor(){}

// get all resources
async getResources(req:Request,res:Response,next:NextFunction){
    try{
        const resources=await Resource.findMany();
        res.status(200).json(resources);
    }catch(error){
        console.log("error in resource controller");
        next(error);
    }
}

}