// src/lib/supabase.ts

import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { CookieOptions, Request, Response } from "express";
import { enviroment } from "./enviroment";

export function createSupabaseClient(

): SupabaseClient {
  return createClient(
   enviroment.supabase.url || "",
    enviroment.supabase.api || "",
   
  );
}
