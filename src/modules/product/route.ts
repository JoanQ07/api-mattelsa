import { controllerProduct } from "./controller";
import { Router } from "express";
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/create", upload.single("image"), controllerProduct.createProduct);

export default router;
