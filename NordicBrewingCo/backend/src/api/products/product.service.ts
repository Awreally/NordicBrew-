import {
  CoffeeOrigin,
  CreateProductInput,
  FlavorProfiles,
  ProductCategory,
  ProductResponse,
  ProductRoast,
  UpdateProductInput,
} from "./product.types";
import { ProductModel } from "./product.model";
import { toProductResponse, toProductResponseList } from "./product.mapper";
import { AppError } from "../../errors/AppError";

export const getAllProducts = async (filters: {
  category?: ProductCategory;
  roast?: ProductRoast;
  origin?: CoffeeOrigin;
  flavorProfile?: FlavorProfiles;
}): Promise<ProductResponse[]> => {
  const query: Record<string, unknown> = {};
  if (filters.category) query.category = filters.category;
  if (filters.roast) query.roast = filters.roast;
  if (filters.origin) query.origin = filters.origin;
  if (filters.flavorProfile) query.flavorProfiles = filters.flavorProfile;
  const products = await ProductModel.find(query);
  return toProductResponseList(products);
};

export const getProductBySlug = async (
  slug: string,
): Promise<ProductResponse> => {
  const product = await ProductModel.findOne({ slug });

  if (!product) {
    throw new AppError(404, "Product not found", "PRODUCT_NOT_FOUND");
  }
  return toProductResponse(product);
};

export const createProduct = async (
  input: CreateProductInput,
): Promise<ProductResponse> => {
  const existing = await ProductModel.findOne({ slug: input.slug });

  if (existing) {
    throw new AppError(409, "Product already exists", "PRODUCT_ALREADY_EXISTS");
  }
  const product = await ProductModel.create(input);
  return toProductResponse(product);
};

export const updateProduct = async (
  slug: string,
  input: UpdateProductInput,
): Promise<ProductResponse> => {
  const updatedProduct = await ProductModel.findOneAndUpdate(
    { slug },
    { $set: input },
    { new: true },
  );

  if (!updatedProduct) {
    throw new AppError(404, "Product not found", "PRODUCT_NOT_FOUND");
  }

  return toProductResponse(updatedProduct);
};

export const deleteProduct = async (slug: string): Promise<void> => {
  const deletedProduct = await ProductModel.findOneAndDelete({ slug });

  if (!deletedProduct) {
    throw new AppError(404, "Product not found", "PRODUCT_NOT_FOUND");
  }
};
