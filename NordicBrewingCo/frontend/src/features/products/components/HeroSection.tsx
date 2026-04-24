import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <section className={styles.shopHeader}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.kicker}>Curated Selections</span>

          <h1 className={styles.title}>The Collection</h1>

          <p className={styles.text}>
            Ethically sourced from small-scale farmers in the equatorial
            highlands, then roasted under the dancing lights of the northern
            sky. Every bean tells a story of stewardship and patience.
          </p>
        </div>

        <div className={styles.imageColumn}>
          <div className={styles.mainImageWrapper}>
            <img
              className={styles.image}
              alt="close-up of raw coffee beans and roasted coffee beans in artisanal wooden bowls on a rustic scandinavian table with morning light"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP45pqjOpJhKhZ-Tetst-0I9yZNWZDJDIO8SP1OFBHLhROL_8DMzRshia1jwekK8jNjlgLTXH7ZDkoO0LD4jCtJO5o3UnD66m6Cy4pk9qZprBoxPmy9L2AmCbO63qGbQdZJl3RTvCaFlZ3Or077MRZf5zcMkjhPoj5PM_1v4XNoFcc_2Hgy7Ja54xtu9LGVLXkfQEjq7Gil9QWtzoRDQgQezXBqkKLJ4r7-XMxUJggMRBrktx2OxLUEgEvD_2RlZA_8zZhrY-Pl_8"
            />
          </div>

          <div className={styles.secondaryImageWrapper}>
            <img
              className={styles.image}
              alt="steaming cup of artisanal pour-over coffee on a dark wood surface with soft morning fog in the background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDID0ialYYeetfkaLPMPXaItPc8uWmvLOihJIbE2Z8f_jI4qODvWTXb_QPlJUr5DLPmE7oxOTmI4JHhBLDQlwaHQ-5vLFeF-I345OiHpjmOicFfeGEVptQfMTHv9T7s6mim5mV9mb9xw9qzmCsOF4j0VBUXoEB7DddCwi8CK0g1qwprkLaTfTl9GetzILahhs68JvMRE3ZVhCiFh9_bPQ1wAArmkw1Eq3oLbbSDD-24gRpWiRxG5JJuLqnSVvNd-sh5S3hy_9GN-7U"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
