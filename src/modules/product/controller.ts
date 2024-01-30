import { errorHttp, resHttp } from "../../helper";
import { servicesProduct } from "./services";
import { Response, Request } from "express";

const createProduct = async ({ body }: Request, res: Response) => {
  try {
    const data = await servicesProduct.createProduct(body);

    return resHttp({
      res,
      data,
      message: `Producto registrado ${body.name} exitosamente`,
    });
  } catch (error: any) {
    errorHttp({ res, data: error });
  }
};

const filterByClass = async ({ query }: Request, res: Response) => {
  try {
    const data = await servicesProduct.filterByClass({ query });

    return resHttp({
      res,
      data,
    });
  } catch (error) {
    errorHttp({ res, data: error });
  }
};

export const controllerProduct = { createProduct, filterByClass };
