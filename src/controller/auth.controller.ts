import { EmailOtpType, MobileOtpType, VerifyOtpParams } from "@supabase/supabase-js";
import { AuthService } from "../services/auth.service";
import { Request, Response, NextFunction,CookieOptions } from "express";
import { createSupabaseClient } from "../config/supa";




export class AuthController {
  constructor(private authService: AuthService) {}

  async confirmAuth(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token_hash = req.query.token_hash as string;
      const type = req.query.type as EmailOtpType | MobileOtpType;
      const next = (req.query.next as string) ?? "/";
      const verifyOtpParams = req.query.param as string;
      if (!token_hash || !type || !verifyOtpParams) {
        res.status(400).json({ error: "Invalid parameters" });
        return;
      }
      const verifyOtp = await VerifyOtpParamsType(
        type,
        token_hash,
        verifyOtpParams
      );

      const supabase = createSupabaseClient();
      this.authService = new AuthService(supabase);
      const { error, data } = await this.authService.verifyOtp(verifyOtp);

      if (!error) {
        // take the user data and set it in the session#
        // console.log(data);

        res.redirect(303, `/${next.slice(1)}`);
      } else {
        res.redirect(303, "/auth/auth-code-error");
      }
    } catch (error) {
      console.log("error in auth controller");
      next(error);
    }
  }

  async signUpwithemail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const supabase = createSupabaseClient();
      this.authService = new AuthService(supabase);

      const email = req.body.email as string;
      const password = req.body.password as string;
      const user = await this.authService.signUp(email, password);
      res
        .status(200)
        .json({ user: user, message: "User created successfully" });
    } catch (error) {
      console.log("error in auth controller");
      next(error);
    }
  }
}



const VerifyOtpParamsType=async(type:MobileOtpType|EmailOtpType,token:string,verifyParam:string):Promise<VerifyOtpParams>=>{
    if(type==="email"){
        return {
            type:type,
            token:token,
            email:verifyParam
        } as VerifyOtpParams
    }else if (type==="sms"){
        return {
            type:type,
            token:token,
            phone:verifyParam 
        }as VerifyOtpParams}
        else if(type==='magiclink'){
            return {
                type:type,
                token:token,
                email:verifyParam
            } as VerifyOtpParams;
        }
        else if(type==='phone_change'){
            return {
                type:type,
                token:token,
               
            } as VerifyOtpParams;
        }
        else if(type==='email_change'){
            return {
                type:type,
                token:token,
               
            } as VerifyOtpParams;
        }   


        return {
            type:type,
            token:token,
            phone:verifyParam,
            email:verifyParam
        } as VerifyOtpParams;

};