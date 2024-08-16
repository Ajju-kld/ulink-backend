import { PrismaClient, Role } from "@prisma/client";
import { Resource } from "./Resource.model";

const prisma = new PrismaClient();
export const Profile = prisma.profiles;


export interface Profile {
    id: string;
    username?: string|null;
    email?: string | null;
    role:Role;
    resources?:Resource[];

    
}
