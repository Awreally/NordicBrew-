import { Router } from "express";
import {
  getProduct,
  getProducts,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
} from "./product.controller";
import {
  CreateProductSchema,
  GetProductsSchema,
  ProductSlugParamSchema,
  UpdateProductSchema,
} from "./product.validation";
import {
  validateBody,
  validateParams,
  validateQuery,
} from "../../middleware/validateBody";

const productRouter = Router();

productRouter.get("/", validateQuery(GetProductsSchema), getProducts);
productRouter.post("/", validateBody(CreateProductSchema), createProductHandler);
productRouter.get("/:slug", validateParams(ProductSlugParamSchema), getProduct);
productRouter.patch(
  "/:slug",
  validateParams(ProductSlugParamSchema),
  validateBody(UpdateProductSchema),
  updateProductHandler,
);
productRouter.delete(
  "/:slug",
  validateParams(ProductSlugParamSchema),
  deleteProductHandler,
);

export default productRouter;
