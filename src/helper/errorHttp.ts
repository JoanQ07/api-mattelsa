import { Response } from "express";

export interface IErrorHttp {
  data: any;
  res: Response;
  status?: number;
  success?: Boolean;
  message?: string;
}

export const errorHttp = ({ res, status = 400, data, success = false, message }: IErrorHttp) => {
  console.log("❌  error--> ", data);
  res.status(status).json({ data, success, message });
};
