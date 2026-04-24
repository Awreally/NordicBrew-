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


export type ProductCategory = "whole-bean" | "ground" | "cold-brew";