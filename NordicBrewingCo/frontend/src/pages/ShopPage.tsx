import { useLoaderData } from "react-router-dom";
import type { ProductResponse } from "../features/products/types/product.types";
import { ProductList } from "../features/products/components/ProductList";
import { HeroSection } from "../features/products/components/HeroSection";
import { FilterSidebar } from "../features/products/components/Filterbar";
import styles from "./ShopPage.module.css";

export const ShopPage = () => {
  const products = useLoaderData() as ProductResponse[];

  return (
    <>
      <HeroSection />
      <FilterSidebar count={products.length} />
      <main className={styles.shopSection}>
        <ProductList products={products} />
      </main>
    </>
  );
};
