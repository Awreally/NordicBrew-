import type { ProductResponse } from "../types/product.types";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: ProductResponse;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.productImage}
          src={product.imageUrl}
          alt={product.name}
        />

        <div className={styles.badgeWrapper}>
          <span className={styles.productBadge}>Dark Roast</span>
        </div>
      </div>
      <div className={styles.productContent}>
        <div className={styles.productHeader}>
          <h2 className={styles.productTitle}>{product.name}</h2>
          <span className={styles.productPrice}>{product.price}:-</span>
        </div>

        <p className={styles.productDescription}>{product.description}</p>

        <div className={styles.action}>
          <button className={styles.addButton}>Add to Cart</button>

          <button
            className={styles.favoriteButton}
            aria-label="Add to wishlist"
          >
            <span className="material-symbols-outlined">favorite</span>
          </button>
        </div>
      </div>
    </article>
  );
};
