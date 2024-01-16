import { errorHttp, resHttp } from "../../helper";
import { servicesCategory } from "./services";
import { Response, Request } from "express";

const registerUser = async ({ body }: Request, res: Response) => {
  try {
    const data = await servicesCategory.registerUser(body);

    return resHttp({ res, data: data, message: `User registrado ${body.id} exitosamente` });
  } catch (error: any) {
    errorHttp({ res, data: error });
  }
};

export const controllerUser = { registerUser };
