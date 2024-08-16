import {
    PrismaClient
}from '@prisma/client';

const prisma = new PrismaClient();

export const Resource=prisma.resources;

export interface Resource{
    id:string;
    title:string;
    description:string;
    url:string;
    profileId:string;
}

