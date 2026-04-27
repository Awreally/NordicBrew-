export type ProductCategory =
  | "whole-bean"
  | "ground"
  | "cold-brew"
  | "espresso";

export type FlavorProfile =
  | "citrus"
  | "chocolate"
  | "caramel"
  | "floral"
  | "nutty"
  | "smoky"
  | "fruity"
  | "spicy";

export type CoffeeOrigin =
  | "ethiopia"
  | "colombia"
  | "brazil"
  | "costa-rica"
  | "rwanda";

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
  flavorProfile: FlavorProfile[];
  origin: CoffeeOrigin;
  createdAt: string;
  updatedAt: string;
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
  flavorProfiles: FlavorProfile[];
  origin: CoffeeOrigin;
}

export interface ProductParams {
  slug: string;
}

export type UpdateProductInput = Partial<Omit<CreateProductInput, "slug">>;
