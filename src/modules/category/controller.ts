import { errorHttp, resHttp } from "../../helper";
import { servicesCategory } from "./services";
import { Response, Request } from "express";

const createCategory = async ({ body, query }: Request, res: Response) => {
  try {
    console.log("💠  query--> ", query)
    console.log("💠  body--> ", body)
    const data = await servicesCategory.createCategory(body);

    return resHttp({ res, data: data, message: `Categoria creada ${body.name} exitosamente` });
  } catch (error: any) {
    errorHttp({ res, data: error });
  }
};

export const controllerCategory = { createCategory };
