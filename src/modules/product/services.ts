import { PrismaClient, Prisma } from "@prisma/client";
import { Response, Request } from "express";
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

const filterByClass = async ({ query }: any) => {
  try {
    const where =
      query.classProduct == "all"
        ? {}
        : {
            classProduct: query.classProduct,
          };

    const res = await prisma.product.findMany({
      where,
      take: 20,
    });
    console.log("💠  res--> ", res)

    return res;
  } catch (error) {
    throw error;
  }
};

export const servicesProduct = { createProduct, filterByClass };
