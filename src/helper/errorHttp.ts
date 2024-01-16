import { Response } from "express";

export interface IerrorHttp {
  data: Object;
  res: Response;
  status?: number;
  success?: Boolean;
  message?: string;
}

export const errorHttp = ({ res, status = 400, data, success = false, message }: IerrorHttp) => {
  console.log("❌  error--> ", data);
  res.status(status).json({ data, success, message });
};
