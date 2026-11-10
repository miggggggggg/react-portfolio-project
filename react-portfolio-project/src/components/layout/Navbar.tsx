import styles from "./Navbar.module.css";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.heroLink}>
        <Link to="/">Miguel Baldacchino</Link>
      </span>

      <div className={styles.navbarRight}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
