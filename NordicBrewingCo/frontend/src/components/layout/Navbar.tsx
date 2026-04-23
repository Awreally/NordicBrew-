import { NavLink } from "react-router-dom";
import NBC from "../../assets/NBC.png";
import styles from "./Navbar.module.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/subscription", label: "Subscription" },
  { to: "/ourstory", label: "Our Story" },
  { to: "/cart", label: "Cart" },
  { to: "/login", label: "Login" },
];

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={NBC} alt="logo" className={styles.logo} />
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};
