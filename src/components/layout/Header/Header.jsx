import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/costs_logo.png";

function Header() {
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
        <Link to="/projects">Projetos</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contatos</Link>
      </nav>
    </header>
  );
}

export default Header;
