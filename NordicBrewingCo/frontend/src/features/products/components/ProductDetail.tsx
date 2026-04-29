import type { ProductResponse } from "../types/product.types";
import styles from "./ProductDetail.module.css";
import { flavorProfiles } from "../constants/filterOptions";

interface ProductDetailProps {
  product: ProductResponse;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const flavorProfileLabels = product.flavorProfile.map((flavor) => {
    const flavorInfo = flavorProfiles.find((item) => item.value === flavor);

    return {
      value: flavor,
      label: flavorInfo?.label ?? flavor,
    };
  });

  return (
    <div className={styles.pdpWrapper}>
      {/* Product Hero Section */}
      <section className={styles.pdpContainer}>
        {/* Left: Product Image */}
        <div className={styles.productGallery}>
          <div className={styles.tiltedBackground} />

          <div className={styles.productMainImage}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className={styles.productImage}
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className={styles.productDetails}>
          <span className={styles.productMetaLabel}>Seasonal Release</span>

          <h1 className={styles.productTitle}>{product.name}</h1>

          <p className={styles.productSubtitle}>{product.description}</p>

          <div className={styles.productPriceRow}>
            <span className={styles.productPrice}>{product.price}:-</span>

            <div className={styles.productTags}>
              <span className={styles.productBadge}>{product.category}</span>
              <span className={styles.productBadge}>{product.roast}</span>
            </div>
          </div>

          <div className={styles.sensoryProfile}>
            <h3 className={styles.profileTitle}>Flavor Profile</h3>

            <div className={styles.flavorList}>
              {flavorProfileLabels.map((flavor) => (
                <div key={flavor.value} className={styles.flavorItem}>
                  <span className={styles.flavorName}>{flavor.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.purchaseActions}>
            <button className={styles.primaryButton} type="button">
              Add to Sanctuary 🛒
            </button>

            <button className={styles.secondaryButton} type="button">
              Subscribe & Save 15%
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
