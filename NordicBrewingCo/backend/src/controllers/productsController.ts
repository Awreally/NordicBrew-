import { Request, Response, NextFunction } from "express";
import { ProductModel } from "../models/ProductModel";
import {
  ProductParams,
  CreateProductInput,
  UpdateProductInput,
} from "../types/productTypes";
import { toProductResponse } from "../mappers/productMapper";
import { AppError } from "../errors/AppError";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const products = await ProductModel.find().lean();

    res.json({
      success: true,
      data: products.map(toProductResponse),
    });
  } catch (err) {
    next(err);
  }
};

export const getProductBySlug = async (
  req: Request<ProductParams>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const product = await ProductModel.findOne({ slug: req.params.slug }).lean();

    if (!product) {
      next(new AppError(404, "Product not found", "PRODUCT_NOT_FOUND"));
      return;
    }

    res.json({
      success: true,
      data: toProductResponse(product),
    });
  } catch (err) {
    next(err);
  }
};

export const createProduct = async (
  req: Request<{}, {}, CreateProductInput>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const existingProduct = await ProductModel.findOne({
      slug: req.body.slug,
    }).lean();

    if (existingProduct) {
      next(
        new AppError(
          409,
          "Product with this slug already exists",
          "SLUG_CONFLICT",
        ),
      );
      return;
    }

    const createdProduct = await ProductModel.create(req.body);

    res.status(201).json({
      success: true,
      data: toProductResponse(createdProduct.toObject()),
    });
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (
  req: Request<ProductParams, {}, UpdateProductInput>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const updatedProduct = await ProductModel.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      {
        new: true,
        runValidators: true,
      },
    ).lean();

    if (!updatedProduct) {
      next(new AppError(404, "Product not found", "PRODUCT_NOT_FOUND"));
      return;
    }

    res.json({
      success: true,
      data: toProductResponse(updatedProduct),
    });
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (
  req: Request<ProductParams>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const deletedProduct = await ProductModel.findOneAndDelete({
      slug: req.params.slug,
    }).lean();

    if (!deletedProduct) {
      next(new AppError(404, "Product not found", "PRODUCT_NOT_FOUND"));
      return;
    }

    res.json({
      success: true,
      message: "Product deleted",
    });
  } catch (err) {
    next(err);
  }
};