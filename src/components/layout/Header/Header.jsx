import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/costs_logo.png";

function Header(props) {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
        />
      </Link>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Company</Link>
        <Link to="/newproject">NewProject</Link>
      </nav>
    </header>
  );
}

export default Header;
