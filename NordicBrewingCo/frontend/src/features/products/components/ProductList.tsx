import type { ProductResponse } from "../types/product.types";
import { ProductCard } from "./ProductCard";
import styles from "./ProductList.module.css";

interface ProductListProps {
  products: ProductResponse[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <section className={styles.productGrid}>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
