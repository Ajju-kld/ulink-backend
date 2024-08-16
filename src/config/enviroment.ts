import { configDotenv } from "dotenv";

configDotenv();

export const enviroment = {
    database:{
        url: process.env.DATABASE_URL,
    },
    supabase:{
        url: process.env.SUPA_BASE_PROJECT_URL,

        api: process.env.SUPA_BASE_API,
        direct_url:process.env.DIRECT_URL,
    }
};