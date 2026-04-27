import styles from "./FilterSidebar.module.css";
import { useProductFilter } from "../hooks/useProductFilter";

export const FilterSidebar = () => {
  const {category, setCategory} = useProductFilter();

  return (
    <aside className={styles.filtersAside}>
      <div>
        <h3 className={styles.filterTitle}>Roast Level</h3>

        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <div className={styles.radioCircle}></div>
            <span className={styles.radioText}>Light Roast</span>
          </label>

          <label className={styles.radioLabel}>
            <div className={styles.radioCircleActive}></div>
            <span className={styles.radioTextActive}>Medium Roast</span>
          </label>

          <label className={styles.radioLabel}>
            <div className={styles.radioCircle}></div>
            <span className={styles.radioText}>Dark Roast</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className={styles.filterTitle}>Flavor Profile</h3>

        <div className={styles.tagGroup}>
          <button className={styles.tagButtonActive}>Citrus</button>
          <button className={styles.tagButton}>Nutty</button>
          <button className={styles.tagButton}>Smoky</button>
          <button className={styles.tagButton}>Fruity</button>
        </div>
      </div>

      <div>
        <h3 className={styles.filterTitle}>Region</h3>

        <select 
        className={styles.select} 
        defaultValue="All Regions"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Regions</option>
          <option value="whole-bean">Whole bean</option>
          <option value="ground">Ground</option>
          <option value="cold-brew">Coldbrew</option>
        </select>
      </div>
    </aside>
  );
}