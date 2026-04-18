export type ProductCategory = "whole-bean" | "ground" | "cold-brew";

export interface ProductParams {
  slug: string;
}

export interface CreateProductInput {
  slug: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  inStock?: boolean;
  category: ProductCategory;
  imageUrl: string;
}

export type UpdateProductInput = Partial<CreateProductInput>;

export interface ProductResponse {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  inStock: boolean;
  category: ProductCategory;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}