import type { ProductResponse, ProductRoast } from "../types/product.types";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: ProductResponse;
  variant?: "default" | "featured";
}

const roastBadgeClasses: Record<ProductRoast, string> = {
  light: styles.lightRoastBadge,
  medium: styles.mediumRoastBadge,
  dark: styles.darkRoastBadge,
};

export const ProductCard = ({
  product,
  variant = "default",
}: ProductCardProps) => {
  const isFeatured = variant === "featured";
  const roastBadgeClass = `${styles.productBadge} ${roastBadgeClasses[product.roast]}`;

  return (
    <article
      className={`${styles.productCard} ${variant === "featured" ? styles.featured : ""}`}
    >
      <Link to={`/shop/${product.slug}`} className={styles.productLink}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.productImage}
            src={product.imageUrl}
            alt={product.name}
          />
          <div className={styles.badgeWrapper}>
            <span className={roastBadgeClass}>{product.roast} ROAST</span>
          </div>
        </div>
        <div className={styles.flavorTags}>
          {product.flavorProfile.map((flavor) => (
            <span key={flavor} className={styles.productBadge}>
              {flavor}
            </span>
          ))}
        </div>
        <div className={styles.productHeader}>
          <h3 className={styles.productTitle}>{product.name}</h3>
          <span className={styles.productPrice}>{product.price}:-</span>
        </div>
        <p className={styles.productDescription}>{product.description}</p>
      </Link>

      {isFeatured && (
        <button
          className={styles.cartIconButton}
          aria-label={`Add ${product.name} to cart`}
        >
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </button>
      )}

      <div className={styles.action}>
        <button className={styles.addButton}>Add to Cart</button>
        <button className={styles.favoriteButton} aria-label="Add to wishlist">
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>
    </article>
  );
};
