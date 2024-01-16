import { PrismaClient } from "@prisma/client";
import { IUser } from "./interface";
const prisma = new PrismaClient();

const registerUser = async (data: IUser) => {
  try {
    const res = await prisma.user.create({ data });
    return res;
  } catch (error) {
    throw error;
  }
};

export const servicesCategory = { registerUser };
