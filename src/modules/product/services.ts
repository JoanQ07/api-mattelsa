import { PrismaClient, Prisma } from "@prisma/client";
import { IProdcut } from "./interface";
const prisma = new PrismaClient();

const createProduct = async (data: IProdcut) => {
  try {
    const { size } = data;

    const res = await prisma.product.create({
      data: {
        ...data,
        size: {
          createMany: { data: [...size] },
        },
      },
    });

    return res;
  } catch (error) {
    throw error;
  }
};

export const servicesProduct = { createProduct };
