import type {
  ProductCategory,
  ProductRoast,
  FlavorProfile,
} from "../types/product.types"

export const roastLevels: { value: ProductRoast; label: string }[] = [
  { value: "light", label: "Light Roast" },
  { value: "medium", label: "Medium Roast" },
  { value: "dark", label: "Dark Roast" },
];

export const flavorProfiles: { value: FlavorProfile; label: string }[] = [
  { value: "citrus", label: "Citrus" },
  { value: "chocolate", label: "Chocolate" },
  { value: "caramel", label: "Caramel" },
  { value: "floral", label: "Floral" },
  { value: "nutty", label: "Nutty" },
  { value: "smoky", label: "Smoky" },
  { value: "fruity", label: "Fruity" },
  { value: "spicy", label: "Spicy" },
];

export const categories: { value: ProductCategory | ""; label: string }[] = [
  { value: "", label: "All" },
  { value: "whole-bean", label: "Whole Bean" },
  { value: "ground", label: "Ground" },
  { value: "cold-brew", label: "Cold Brew" },
  { value: "espresso", label: "Espresso" },
];