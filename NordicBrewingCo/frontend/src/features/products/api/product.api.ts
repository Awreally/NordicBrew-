import { apiFetch } from "../../../lib/api";
import type { ProductResponse, ProductCategory, FlavorProfile, ProductRoast, CoffeeOrigin } from "../types/product.types";

export const fetchProducts = async (filters?: {
  category?: ProductCategory;
  roast?: ProductRoast;
  origin?: CoffeeOrigin;
  flavorProfile?: FlavorProfile;
}): Promise<ProductResponse[]> => {
  const params = new URLSearchParams();

  if (filters?.category) params.set("category", filters.category);
  if (filters?.roast) params.set("roast", filters.roast);
  if (filters?.origin) params.set("origin", filters.origin);
  if (filters?.flavorProfile) params.set("flavorProfile", filters.flavorProfile);

  const query = params.toString();
  return apiFetch<ProductResponse[]>(
    query ? `/products?${query}` : "/products",
  );
};
