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

const filterByClass = async ({ query }: any) => {
  try {
    const where = query.classProduct == "none" ? {} : loadClasses(query.classProduct);
    const orderBy = query.orderBy == "none" ? {} : { price: query.orderBy };

    const res = await prisma.product.findMany({
      include: {
        size: true,
      },
      where,
      orderBy,
      take: 20,
    });

    return res;
  } catch (error) {
    throw error;
  }
};

const loadClasses = (listClasses: Array<any>): object => {
  const where: any = {
    OR: [],
  };

  listClasses.forEach((item) => {
    where.OR.push({
      classProduct: item,
    });
  });

  return where;
};

export const servicesProduct = { createProduct, filterByClass };
