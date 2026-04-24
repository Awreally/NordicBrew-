import { apiFetch } from "../../../lib/api";
import type { ProductResponse } from "../types/product.types";

export const fetchProducts = async (): Promise<ProductResponse[]> =>
    apiFetch<ProductResponse[]>("/products");
