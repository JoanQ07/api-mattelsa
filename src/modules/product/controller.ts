import { errorHttp, resHttp } from "../../helper";
import { servicesProduct } from "./services";
import { Response, Request } from "express";

const createProduct = async ({ body }: Request, res: Response) => {
  try {
    const data = await servicesProduct.createProduct(body);
    console.log("💠  data--> ", data)

    return resHttp({ res, data: data, message: `Producto registrado: ${body.name} exitosamente` });
  } catch (error: any) {
    errorHttp({ res, data: error });
  }
};

export const controllerProduct = { createProduct };
