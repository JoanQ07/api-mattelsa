import { Response } from "express";
import { IerrorHttp } from "./errorHttp";

interface resHttps extends IerrorHttp {}

export const resHttp = ({ res, status = 200, data, success = true, message }: resHttps) => {
  res.status(status).json({ data, success, message });
};
