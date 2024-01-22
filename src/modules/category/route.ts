import { controllerCategory } from "./controller";
import { Router } from "express";

const router = Router();

router.get("/all-categories", controllerCategory.getAllCategories);
router.post("/create", controllerCategory.createCategory);

export default router;
