import { errorHttp, resHttp } from "../../helper";
import { servicesCategory } from "./services";
import { Response, Request } from "express";
import multer from "multer";

const createCategory = async (req: Request, res: Response) => {
  try {
    const data = await servicesCategory.createCategory(req.body);
    return resHttp({ res, data: data, message: `Categoria creada ${req.body.name} exitosamente` });
  } catch (error: any) {
    errorHttp({ res, data: error });
  }
};

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const data = await servicesCategory.getAllCategories();
    let message = "Solicitud exitosa";
    if (data.length < 1) message = "No se encontraron categorias";
    
    return resHttp({ res, data, message });
  } catch (error: any) {
    errorHttp({ res, data: error });
  }
};

export const controllerCategory = { createCategory, getAllCategories };
