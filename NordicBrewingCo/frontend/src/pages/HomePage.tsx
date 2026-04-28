import { DashHeroSection } from "../features/dashboard/components/DashHeroSection";
import { FeatureBlends } from "../features/dashboard/components/FeatureBlends";
import type { ProductResponse } from "../features/products/types/product.types";
import { useLoaderData } from "react-router-dom";

export const HomePage = () => {
  const products = useLoaderData() as ProductResponse[]; 

  return (
    <>
    <DashHeroSection />
    <FeatureBlends products={products} />
    </>
  );
};
