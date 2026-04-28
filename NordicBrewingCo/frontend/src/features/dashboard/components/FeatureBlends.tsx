import type { ProductResponse } from "../../products/types/product.types";
import { ProductCard } from "../../products/components/ProductCard";
import styles from "./FeatureBlends.module.css";

interface FeatureBlendsProps {
    products: ProductResponse[];
}
export const FeatureBlends = ({products }: FeatureBlendsProps) => {
        return (
            <section className={styles.featSection}>
                <h2 className={styles.featTitle}>Featured Blends</h2>
            </section>
        )
}