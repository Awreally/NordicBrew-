import { Router } from "express";
import { createProduct, getAllProducts, getProductBySlug, updateProduct, deleteProduct } from "../controllers/productsController";

const productsRouter = Router();

productsRouter.get('/', getAllProducts);
productsRouter.get('/:slug', getProductBySlug);
productsRouter.post('/', createProduct);
productsRouter.patch('/:slug', updateProduct);
productsRouter.delete('/:slug', deleteProduct);

export default productsRouter;