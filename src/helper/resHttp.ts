import { Response } from "express";
import { IErrorHttp } from "./errorHttp";

interface resHttps extends IErrorHttp {}

export const resHttp = ({ res, status = 200, data, success = true, message }: resHttps) => {
  res.status(status).json({ data, success, message });
};
