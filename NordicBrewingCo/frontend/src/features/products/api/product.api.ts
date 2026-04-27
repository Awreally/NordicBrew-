import { apiFetch } from "../../../lib/api";
import type { ProductResponse } from "../types/product.types";

export const fetchProducts = async (category?: string): Promise<ProductResponse[]> =>
    apiFetch<ProductResponse[]>(category ? `/products?category=${category}`: "/products");
