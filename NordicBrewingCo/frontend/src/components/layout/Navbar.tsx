import { NavLink } from "react-router-dom";
import NBC from "../../assets/NBCHeaderv2.png";
import styles from "./Navbar.module.css";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/subscription", label: "Subscription" },
  { to: "/brewguides", label: "Brew Guides" },
  { to: "/ourstory", label: "Our Story" },
];

export const Navbar = () => {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.navContainer}>
        <div className={styles.navBrand}>
          <NavLink to="/" className={styles.navLogoLink}>
            <img src={NBC} alt="logo" className={styles.navLogo} />
          </NavLink>
        </div>
        <ul className={styles.navLinks}>
          {links.map((link) => (
            <li key={link.to} className={styles.navItem}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.navActions}>
          <NavLink
            to="/cart"
            aria-label="Cart"
            className={({ isActive }) =>
              isActive
                ? `${styles.navActionIcon} ${styles.activeIcon}`
                : styles.navActionIcon
            }
          >
            <span className="material-symbols-outlined">shopping_cart</span>
          </NavLink>

          <NavLink
            to="/login"
            aria-label="Login"
            className={({ isActive }) =>
              isActive
                ? `${styles.navActionIcon} ${styles.activeIcon}`
                : styles.navActionIcon
            }
          >
            <span className="material-symbols-outlined">person</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
