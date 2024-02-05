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
      query.classProduct == "none"
        ? {}
        : {
            classProduct: query.classProduct,
            AND: { categoryId: query.categoryId },
          };

    const orderBy = query.orderBy == "none" ? {} : { price: query.orderBy };

    const res = await prisma.product.findMany({
      where,
      orderBy,
      take: 20,
    });

    return res;
  } catch (error) {
    throw error;
  }
};

export const servicesProduct = { createProduct, filterByClass };
