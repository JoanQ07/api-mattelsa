import { controllerProduct } from "./controller";
import { Router } from "express";

const router = Router();

router.post("/create", controllerProduct.createProduct);

export default router;
