import styles from "./ProcessSection.module.css";
import aboutus from "../../../assets/aboutus.png"

const processSteps = [
  {
    number: "01",
    title: "Ethical Sourcing",
    description: "Direct-trade beans from farmers who prioritize biodiversity.",
  },
  {
    number: "02",
    title: "Artisan Roasting",
    description:
      "Small batch convection roasting to preserve delicate flavor profiles.",
  },
  {
    number: "03",
    title: "Compostable Packaging",
    description: "Zero-waste bags designed to return to the earth.",
  },
];

export const ProcessSection = () => {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageCard}>
            <img
              className={styles.image}
              src={aboutus}
              alt="Misty forest landscape with ancient towering pine trees and soft morning fog rolling through the valley in Sweden"
            />

            <div className={styles.imageOverlay}>
              <h3 className={styles.imageTitle}>The Nordic Roots</h3>
              <p className={styles.imageText}>
                Our journey began in a small cabin outside Oslo, where the cold
                air and warm coffee created the perfect sanctuary.
              </p>
            </div>
          </div>

          <div className={styles.contentCard}>
            <span className={styles.label}>Our Process</span>

            <h2 className={styles.title}>
              Slowly Roasted, <br />
              Intentionally Brewed.
            </h2>

            <ul className={styles.steps}>
              {processSteps.map((step) => (
                <li key={step.number} className={styles.step}>
                  <span className={styles.stepNumber}>{step.number}</span>

                  <div>
                    <h4 className={styles.stepTitle}>{step.title}</h4>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
