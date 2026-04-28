import { useLoaderData } from "react-router-dom";
import type { ProductResponse } from "../features/products/types/product.types";
import { DashHeroSection } from "../features/dashboard/components/DashHeroSection";
import { FeatureBlends } from "../features/dashboard/components/FeatureBlends";
import { ProcessSection } from "../features/dashboard/components/ProcessSection";
import { SubscriptionSection } from "../features/dashboard/components/SubscriptionSection";

export const HomePage = () => {
  const products = useLoaderData() as ProductResponse[]; 

  return (
    <>
    <DashHeroSection />
    <FeatureBlends products={products} />
    <ProcessSection />
    <SubscriptionSection />
    </>
  );
};
