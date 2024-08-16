import {  SupabaseClient, VerifyOtpParams } from "@supabase/supabase-js";

export class AuthService {
  constructor(private supabase: SupabaseClient) {}

  async verifyOtp(param: VerifyOtpParams): Promise<{ error: any | null,data:any|null }> {
    try {
      const { error ,data } = await this.supabase.auth.verifyOtp(
       param
      );

      const user=data?.user;
      if(user && param.type==="signup"){

        
        if(error){
          return {error,data:null};
        }
        return {error,data};
      }

    return {error,data};

    } catch (error) {
      console.log("error in auth service");
      return { error ,data:null};
    }
  }

  async signUp(email: string, password: string) {
    try {
      //1. sign up the user using the email and password
      const { error, data } = await this.supabase.auth.signUp({
        email,
        password,
      });
      
      if (error){
        throw error;
      }
      // add the user to the database here
      

      return data.user;
    } catch (error) {
      console.log("error in auth service");
     throw error;
    }
  }

 

}



