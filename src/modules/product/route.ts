import { controllerProduct } from "./controller";
import { Router } from "express";
import multer from "multer";

const router = Router();

router.get("/filter-class", controllerProduct.filterByClass);
router.post("/create", controllerProduct.createProduct);

export default router;
