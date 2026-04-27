export type ProductCategory =
  | "whole-bean"
  | "ground"
  | "cold-brew"
  | "espresso";

export type FlavorProfiles =
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

  export type ProductRoast =
  | "light"
  | "medium"
  | "dark"

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
  flavorProfile: FlavorProfiles[];
  origin: CoffeeOrigin;
  roast: ProductRoast;
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
  flavorProfiles: FlavorProfiles[];
  origin: CoffeeOrigin;
  roast: ProductRoast;
}

export interface ProductParams {
  slug: string;
}

export type UpdateProductInput = Partial<Omit<CreateProductInput, "slug">>;
