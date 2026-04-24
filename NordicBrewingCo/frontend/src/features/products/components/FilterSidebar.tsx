import styles from "./FilterSidebar.module.css";

export const FilterSidebar = () => {
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

        <select className={styles.select} defaultValue="All Regions">
          <option>All Regions</option>
          <option>Ethiopia</option>
          <option>Colombia</option>
          <option>Norway (Roastery)</option>
        </select>
      </div>
    </aside>
  );
}