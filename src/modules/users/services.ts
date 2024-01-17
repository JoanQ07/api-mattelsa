import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";
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

const getUserGoogleId = async (googleId?: string): Promise<IUser | null> => {
  try {
    const res = await prisma.user.findFirst({
      where: {
        googleId,
      },
    });

    return res ?? null;
  } catch (error) {
    throw error;
  }
};

export const servicesCategory = { registerUser, getUserGoogleId };
