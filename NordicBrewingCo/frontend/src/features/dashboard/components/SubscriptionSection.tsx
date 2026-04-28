import styles from './SubscriptionSection.module.css';
import { Link } from 'react-router-dom';

export const SubscriptionSection = () => {
  return (
    <section className={styles.subscriptionSection}>
      <div className={styles.container}>
        <div className={styles.badge}>
          <span>Never run out</span>
        </div>

        <h2 className={styles.title}>The Sanctuary Club</h2>

        <p className={styles.description}>
          A monthly curation of our finest roasts delivered to your door. <br />
          Includes limited edition blends and artisan brewing guides.
        </p>

        <div className={styles.actions}>
          <Link to="subscription" className={styles.primaryLink}>Subscribe Now</Link>
          <Link to="subscription" className={styles.secondaryLink}>Learn More</Link>
        </div>
      </div>
    </section>
  );
}