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
  roast: ProductRoast;
  createdAt: string;
  updatedAt: string;
}

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

  export type ProductRoast =
  | "light"
  | "medium"
  | "dark"