import { configDotenv } from "dotenv";

configDotenv();

export const enviroment = {
    database:{
        url: process.env.DATABASE_URL,
    },
    supabase:{
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
    }
};