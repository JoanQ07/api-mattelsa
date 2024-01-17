import { errorHttp, resHttp } from "../../helper";
import { servicesCategory } from "./services";
import { Response, Request } from "express";

const registerUser = async ({ body }: Request, res: Response) => {
  try {
    const data = await servicesCategory.registerUser(body);

    return resHttp({ res, data: data, message: `User registrado ${data.names} exitosamente` });
  } catch (error: any) {
    errorHttp({ res, data: error });
  }
};

const getUserGoogleId = async ({ query }: Request, res: Response) => {
  try {
    const { googleId } = query;
    const data = await servicesCategory.getUserGoogleId(googleId?.toString());

    if (!data) return resHttp({ res, data, message: "No se encontro googleId" });

    return resHttp({ res, data, message: `Proceso existoso` });
  } catch (error: any) {
    errorHttp({ res, data: error });
  }
};

export const controllerUser = { registerUser, getUserGoogleId };
