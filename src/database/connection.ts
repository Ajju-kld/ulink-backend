import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function connectDB() {
  try{
    await prisma.$connect();
    console.log("Database connected");
  }catch(e){
    console.log('Error connecting to the database');
    console.log(e);
    process.exit(1);
  }
}

export async function disconnectDB() {
    try {
        await prisma.$disconnect();
        console.log("Database disconnected");

    } catch (error) {
        console.log('Error disconnecting from the database');
        console.log(error);
        process.exit(1);
    }


}