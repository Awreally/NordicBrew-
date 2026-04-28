import type { ProductResponse } from "../../products/types/product.types";
import { ProductCard } from "../../products/components/ProductCard";
import styles from "./FeatureBlends.module.css";
import { Link } from "react-router-dom";

interface FeatureBlendsProps {
  products: ProductResponse[];
}
export const FeatureBlends = ({ products }: FeatureBlendsProps) => {
  return (
    <section className={styles.featured}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Featured Blends</h2>
          <p className={styles.subtitle}>
            Small batch roasts for the discerning palate.
          </p>
        </div>

        <Link to="shop" className={styles.viewAllLink}>
          View All Collections
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>

      <div className={styles.grid}>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} variant="featured" />
        ))}
      </div>
    </section>
  );
};
