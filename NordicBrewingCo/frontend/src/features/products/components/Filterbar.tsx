import styles from "./FilterBar.module.css";
import { useProductFilter } from "../hooks/useProductFilter";
import { roastLevels, categories } from "../constants/filterOptions";
import type { ProductCategory, ProductRoast } from "../types/product.types";

interface FilterBarProps {
  count?: number;
}

export const FilterSidebar = ({ count }: FilterBarProps) => {
  const { roast, category, setFilters } = useProductFilter();

  return (
    <nav className={styles.filterBar} aria-label="Product filters">
      <div className={styles.filterGroups}>
        <div className={styles.filterGroup}>
          <span className={styles.groupLabel}>Roast</span>
          <button
            className={!roast ? styles.pillActive : styles.pill}
            onClick={() => setFilters({ category })}
          >
            All
          </button>
          {roastLevels.map((level) => (
            <button
              key={level.value}
              className={roast === level.value ? styles.pillActive : styles.pill}
              onClick={() =>
                setFilters({
                  category,
                  roast: roast === level.value ? undefined : (level.value as ProductRoast),
                })
              }
            >
              {level.label.replace(" Roast", "")}
            </button>
          ))}
        </div>

        <div className={styles.divider} />

        <div className={styles.filterGroup}>
          <span className={styles.groupLabel}>Category</span>
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={
                (cat.value === "" ? !category : category === cat.value)
                  ? styles.pillActive
                  : styles.pill
              }
              onClick={() =>
                setFilters({
                  roast,
                  category: cat.value ? (cat.value as ProductCategory) : undefined,
                })
              }
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterMeta}>
        {count !== undefined && (
          <span className={styles.count}>{count} products</span>
        )}
        <span className={styles.sortLabel}>Sort</span>
        <select className={styles.sortSelect} defaultValue="featured">
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </nav>
  );
};
