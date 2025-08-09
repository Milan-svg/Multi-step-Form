import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  addProduct,
  getAllProducts,
} from "../controllers/product.controller.js";

const productRoute = Router();

productRoute.route("/add-product").post(upload.array("images"), addProduct);
productRoute.route("/get-products").get(getAllProducts);

export default productRoute;
