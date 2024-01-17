import { controllerUser } from "./controller";
import { Router } from "express";

const router = Router();

router.get("/get-google-id", controllerUser.getUserGoogleId);
router.post("/register", controllerUser.registerUser);

export default router;
