import type { ProductResponse } from "../types/product.types";
import { ProductCard } from "./ProductCard";
import styles from "./ProductList.module.css";

interface ProductListProps {
  products: ProductResponse[];
}

export const ProductList = ({ products }: ProductListProps) => {
  if (products.length === 0) {
    return (
      <section className={styles.productGrid}>
        <div className={styles.empty}>
          <p className={styles.emptyTitle}>No matches found.</p>
          <p className={styles.emptyBody}>Try adjusting your filters.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} compact />
      ))}
    </section>
  );
};
