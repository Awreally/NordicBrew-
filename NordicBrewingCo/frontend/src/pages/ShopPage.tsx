import { useLoaderData } from "react-router-dom";
import type { ProductResponse } from "../features/products/types/product.types";
import { ProductList } from "../features/products/components/ProductList";
import { HeroSection } from "../features/products/components/HeroSection";
export const ShopPage = () => {
  const products = useLoaderData() as ProductResponse[];
  
  return (
    <>
    <HeroSection />
    <ProductList products={products} />;
    </>
  
  
  ) 
  
  
};