// creating the auth routes

import { Router } from "express";
import { AuthController } from "../controller/auth.controller";
import { AuthService } from "../services/auth.service";
import { createSupabaseClient } from "../config/supa";

const authRouter = Router();

const authService = new AuthService(createSupabaseClient());
const authController = new AuthController(authService);


//routes
authRouter.post("/signup",(req,res,next)=>
     authController.signUpwithemail(req,res,next)
);

export default authRouter;