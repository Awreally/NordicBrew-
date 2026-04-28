import { useLoaderData } from "react-router-dom";
import type { ProductResponse } from "../features/products/types/product.types";
import { ProductDetail } from "../features/products/components/ProductDetail";

export const ShopProductPage = () => {
  const product = useLoaderData() as ProductResponse;
  
  return (
    <>
    <ProductDetail product={product} />
    </>
  )
};