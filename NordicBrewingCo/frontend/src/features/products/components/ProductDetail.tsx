import type { ProductResponse } from "../types/product.types";
import styles from "./ProductDetail.module.css";

interface ProductDetailProps {
  product: ProductResponse;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <article className={styles.ProductDetail}>
      <img src={product.imageUrl} alt={product.name} />
    </article>
  );
};
