import { useState } from "react";
import { Link } from "react-router-dom";
import type { ProductResponse, ProductRoast } from "../types/product.types";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: ProductResponse;
  compact?: boolean;
}

const roastDotClass: Record<ProductRoast, string> = {
  light: styles.dotLight,
  medium: styles.dotMedium,
  dark: styles.dotDark,
};

const fmt = (s: string) => s.replace(/-/g, " ");

export const ProductCard = ({ product, compact = false }: ProductCardProps) => {
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article className={styles.card}>
      <Link to={`/shop/${product.slug}`} className={styles.cardLink}>
        <div className={styles.imageWrap}>
          <img className={styles.image} src={product.imageUrl} alt={product.name} />

          {product.featured && (
            <span className={`${styles.badge} ${styles.badgeBestSeller}`}>Best Seller</span>
          )}

          <span className={styles.weight}>{fmt(product.category)}</span>
          <div className={styles.overlay} />

          <span
            className={styles.addBtn}
            role="button"
            tabIndex={0}
            data-added={added}
            onClick={handleAdd}
            onKeyDown={(e) => e.key === "Enter" && handleAdd(e as unknown as React.MouseEvent)}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </span>
        </div>

        <div className={styles.meta}>
          <span className={`${styles.dot} ${roastDotClass[product.roast]}`} aria-hidden />
          <span className={styles.roastLabel}>{product.roast}</span>
          <span className={styles.metaSep}>·</span>
          <span className={styles.processLabel}>{fmt(product.category)}</span>
        </div>

        <div className={styles.titleRow}>
          <h3 className={styles.title} data-compact={compact}>{product.name}</h3>
          <span className={styles.price}>{product.price}:-</span>
        </div>

        <p className={styles.origin}>{fmt(product.origin)}</p>

        <div className={styles.notes}>
          {product.flavorProfile.map((flavor) => (
            <span key={flavor} className={styles.note}>{flavor}</span>
          ))}
        </div>
      </Link>
    </article>
  );
};
