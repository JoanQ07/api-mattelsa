import { controllerCategory } from "./controller";
import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();

router.post("/create", controllerCategory.createCategory);

export default router;
