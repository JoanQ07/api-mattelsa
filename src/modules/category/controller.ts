import { errorHttp, resHttp } from "../../helper";
import { servicesCategory } from "./services";
import { Response, Request } from "express";

const createCategory = async ({ body }: Request, res: Response) => {
  try {
    const data = await servicesCategory.createCategory(body);

    return resHttp({ res, data: data, message: `Categoria creada ${body.name} exitosamente` });
  } catch (error: any) {
    errorHttp({ res, data: error });
  }
};

export const controllerCategory = { createCategory };
