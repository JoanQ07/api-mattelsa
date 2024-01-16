import { PrismaClient } from "@prisma/client";
import { Icategory } from "./interface";
const prisma = new PrismaClient();

const createCategory = async (data: Icategory) => {
  try {
    const res = await prisma.category.create({ data });
    return res;
  } catch (error) {
    throw error;
  }
};

export const servicesCategory = { createCategory };
