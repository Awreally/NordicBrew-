import { ProductResponse } from "./product.types";
import { IProduct } from "./product.model";

export const toProductResponse = (product: IProduct): ProductResponse => ({
  id: product._id.toString(),
  slug: product.slug,
  name: product.name,
  description: product.description,
  price: product.price,
  compareAtPrice: product.compareAtPrice ?? undefined,
  inStock: product.inStock,
  category: product.category,
  imageUrl: product.imageUrl,
  flavorProfile: product.flavorProfiles,
  origin: product.origin, 
  createdAt: product.createdAt.toISOString(),
  updatedAt: product.updatedAt.toISOString(),
});

export const toProductResponseList = (products: IProduct[]): ProductResponse[] =>
  products.map(toProductResponse);