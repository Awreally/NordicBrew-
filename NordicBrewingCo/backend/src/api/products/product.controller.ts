import {
  getAllProducts,
  getProductBySlug,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./product.service";
import { Request, Response, NextFunction } from "express";
import {
  CoffeeOrigin,
  CreateProductInput,
  FlavorProfiles,
  ProductCategory,
  ProductParams,
  ProductRoast,
  UpdateProductInput,
} from "./product.types";

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { category, roast, origin, flavorProfile } = req.query;
    const products = await getAllProducts({ 
      category: category as ProductCategory,
      roast: roast as ProductRoast,
      origin: origin as CoffeeOrigin,
      flavorProfile: flavorProfile as FlavorProfiles,
    });
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

export const getProduct = async (
  req: Request<ProductParams>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const slug = req.params.slug;
    const product = await getProductBySlug(slug);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

export const createProductHandler = async (
  req: Request<{}, {}, CreateProductInput>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const product = await createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};

export const updateProductHandler = async (
  req: Request<ProductParams, {}, UpdateProductInput>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const updatedProduct = await updateProduct(req.params.slug, req.body);
    res.status(200).json(updatedProduct);
  } catch (err) {
    next(err);
  }
};

export const deleteProductHandler = async (
  req: Request<ProductParams>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    await deleteProduct(req.params.slug);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
