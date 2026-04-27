import { useSearchParams } from "react-router"
import type { ProductCategory, ProductRoast, CoffeeOrigin, FlavorProfile } from "../types/product.types";

export const useProductFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") as ProductCategory ?? undefined;
  const roast = searchParams.get("roast") as ProductRoast ?? undefined;
  const origin = searchParams.get("origin") as CoffeeOrigin ?? undefined;
  const flavorProfile = searchParams.get("flavorProfile") as FlavorProfile ?? undefined;

  const setFilters = (filters: {
    category?: ProductCategory;
    roast?: ProductRoast;
    origin?: CoffeeOrigin;
    flavorProfile?: FlavorProfile;
  }) => {
    const params = new URLSearchParams();
    if (filters.category) params.set("category", filters.category);
    if (filters.roast) params.set("roast", filters.roast);
    if (filters.origin) params.set("origin", filters.origin);
    if (filters.flavorProfile) params.set("flavorProfile", filters.flavorProfile);
    setSearchParams(params);
  };

  return { category, roast, origin, flavorProfile, setFilters };
};