import styles from "./FilterSidebar.module.css";
import { useProductFilter } from "../hooks/useProductFilter";
import {
  roastLevels,
  flavorProfiles,
  categories,
} from "../constants/filterOptions";
import type { ProductCategory } from "../types/product.types";

export const FilterSidebar = () => {
  const { category, roast, flavorProfile, setFilters } = useProductFilter();

  return (
    <aside className={styles.filtersAside}>
      <div>
        <h3 className={styles.filterTitle}>Roast Level</h3>
        <div className={styles.radioGroup}>
          {roastLevels.map((level) => (
            <label key={level.value} className={styles.radioLabel}>
              <div
                className={
                  roast === level.value
                    ? styles.radioCircleActive
                    : styles.radioCircle
                }
                onClick={() =>
                  setFilters({
                    category,
                    roast: roast === level.value ? undefined : level.value,
                    flavorProfile,
                  })
                }
              />
              <span
                className={
                  roast === level.value
                    ? styles.radioTextActive
                    : styles.radioText
                }
              >
                {level.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className={styles.filterTitle}>Flavor Profile</h3>
        <div className={styles.tagGroup}>
          {flavorProfiles.map((flavor) => (
            <button
              key={flavor.value}
              className={
                flavorProfile === flavor.value
                  ? styles.tagButtonActive
                  : styles.tagButton
              }
              onClick={() =>
                setFilters({
                  category,
                  roast,
                  flavorProfile:
                    flavorProfile === flavor.value ? undefined : flavor.value,
                })
              }
            >
              {flavor.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className={styles.filterTitle}>Category</h3>
        <select
          className={styles.select}
          value={category ?? ""}
          onChange={(e) =>
            setFilters({
              category: (e.target.value as ProductCategory) || undefined,
              roast,
              flavorProfile,
            })
          }
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
};
