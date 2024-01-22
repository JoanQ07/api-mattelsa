import { errorHttp, resHttp } from "../../helper";
import { servicesProduct } from "./services";
import { Response, Request } from "express";
import multer from "multer";

const createProduct = async ({ body, file }: Request, res: Response) => {
  try {
    console.log("💠  body--> ", body)
    console.log("💠  file--> ", file)
    const data = await servicesProduct.createProduct(body);
    console.log("💠  data--> ", data);

    return resHttp({ res, data: {...data, image: file?.filename}, message: `Producto registrado: ${body.name} exitosamente` });
  } catch (error: any) {
    errorHttp({ res, data: error });
  }
};

export const controllerProduct = { createProduct };
