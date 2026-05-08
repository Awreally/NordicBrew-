import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { TabsAuth } from "./TabsAuth";
import { TextInput } from "../../../components/ui/Input/TextInput";

export const LoginForm = () => {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <TabsAuth />
        <h1 className={styles.heading}>Welcome Back</h1>
        <p className={styles.sub}>Sign in to your Nordic Brew Co. account.</p>
        <form className={styles.form}>
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
          />
          <div className={styles.forgotRow}>
            <Link to="/" className={styles.link}>Forgot password?</Link>
          </div>
          <button type="submit" className={styles.submit}>
            Sign In
          </button>
        </form>
        <footer className={styles.footer}>
          <p>
            New to Nordic Brew Co.?{" "}
            <Link to="/register" className={styles.switchLink}>
              Create an account
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
};
