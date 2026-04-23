import { Router } from "express";
import {
  getProduct,
  getProducts,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
} from "./product.controller";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.post("/", createProductHandler);
productRouter.get("/:slug", getProduct);
productRouter.patch("/:slug", updateProductHandler);
productRouter.delete("/:slug", deleteProductHandler);

export default productRouter;
