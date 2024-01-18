import routesCategory from "../src/modules/category/route";
import routesProduct from "../src/modules/product/route";
import routesUser from "../src/modules/users/route";
import { Router } from "express";
const router = Router();

router.use("/category", routesCategory);
router.use("/product", routesProduct);
router.use("/user", routesUser);

export default router;
