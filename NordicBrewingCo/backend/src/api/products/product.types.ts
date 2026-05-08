import { z } from "zod";

export const CategoryEnum = z.enum(["whole-bean", "ground", "cold-brew", "espresso"]);
export type ProductCategory = z.infer<typeof CategoryEnum>;

export const RoastEnum = z.enum(["light", "medium", "dark"]);
export type ProductRoast = z.infer<typeof RoastEnum>;

export const OriginEnum = z.enum([
  "ethiopia",
  "colombia",
  "brazil",
  "costa-rica",
  "rwanda",
]);
export type CoffeeOrigin = z.infer<typeof OriginEnum>;

export const FlavorProfileEnum = z.enum([
  "citrus",
  "chocolate",
  "caramel",
  "floral",
  "nutty",
  "smoky",
  "fruity",
  "spicy",
]);
export type FlavorProfiles = z.infer<typeof FlavorProfileEnum>;

export interface ProductResponse {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  inStock: boolean;
  featured: boolean;
  category: ProductCategory;
  imageUrl: string;
  flavorProfile: FlavorProfiles[];
  origin: CoffeeOrigin;
  roast: ProductRoast;
  createdAt: string;
  updatedAt: string;
}
