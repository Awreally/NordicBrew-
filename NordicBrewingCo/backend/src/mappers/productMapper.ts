import { ProductResponse } from "../types/productTypes";

type ProductLike = {
  _id: { toString(): string };
  slug: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number | null;
  inStock: boolean;
  category: "whole-bean" | "ground" | "cold-brew";
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export const toProductResponse = (product: ProductLike): ProductResponse => ({
  id: product._id.toString(),
  slug: product.slug,
  name: product.name,
  description: product.description,
  price: product.price,
  compareAtPrice: product.compareAtPrice ?? undefined,
  inStock: product.inStock,
  category: product.category,
  imageUrl: product.imageUrl,
  createdAt: product.createdAt.toISOString(),
  updatedAt: product.updatedAt.toISOString(),
});
