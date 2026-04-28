import styles from "./DashHeroSection.module.css";
import Heropage from "../../../assets/Heropage.png";
import { Link } from "react-router-dom";

export const DashHeroSection = () => {
  
  
    return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img
          className={styles.image}
          src={Heropage}
          alt="Steaming handmade ceramic mug of coffee on a weathered oak table in front of a window overlooking a foggy Scandinavian pine forest at dawn"
        />

        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>The Digital Sanctuary</span>

          <h1 className={styles.title}>
            Morning Light <br />
            <span>Slowly Poured.</span>
          </h1>

          <p className={styles.description}>
            Ethically sourced beans, roasted in small batches under the Northern
            lights. Experience coffee as an intentional ritual.
          </p>

          <div className={styles.actions}>
            <Link to="shop" className={styles.primaryLink}>
              Shop The Collection
            </Link>

            <Link to="subscription" className={styles.secondaryLink}>Join the Club</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
