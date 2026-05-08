import styles from "./LoginPage.module.css";
import { LoginForm } from "../features/Auth/componenets/LoginForm";

export const LoginPage = () => {
  return (
    <section className={styles.auth}>
      <nav className={styles.nav}>
        <span className={styles.brandName}>Nordic Brew Co.</span>
        <a href="/" className={styles.back}>← Back to shop</a>
      </nav>
      <div className={styles.body}>
        <div className={styles.formPane}>
          <LoginForm />
        </div>
        <div className={styles.imagePane}>
          <div className={styles.imagePaneBg} />
          <div className={styles.imagePaneOverlay} />
          <div className={styles.imagePaneContent}>
            <blockquote className={styles.quote}>
              "Crafted with patience,<br />enjoyed with purpose."
            </blockquote>
            <p className={styles.caption}>Nordic Brew Co. — Est. 2018</p>
          </div>
        </div>
      </div>
    </section>
  );
};
