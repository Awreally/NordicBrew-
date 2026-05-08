import { useState } from "react";
import styles from "./TabsAuth.module.css";

export const TabsAuth = () => {
  const [active, setActive] = useState<"signin" | "register">("signin");

  return (
    <div className={styles.tabs}>
      <button
        type="button"
        className={`${styles.btn} ${active === "signin" ? styles.btnActive : ""}`}
        onClick={() => setActive("signin")}
      >
        Sign In
      </button>
      <button
        type="button"
        className={`${styles.btn} ${active === "register" ? styles.btnActive : ""}`}
        onClick={() => setActive("register")}
      >
        Create Account
      </button>
    </div>
  );
};
