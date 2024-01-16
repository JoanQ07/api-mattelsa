import routesCategory from "../src/modules/category/route";
import routesUser from "../src/modules/users/route";
import { Router } from "express";
const router = Router();

router.use("/category", routesCategory);
router.use("/user", routesUser);

export default router;
