import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <a
            href="https://www.facebook.com/alexssimao1/"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/alexssimao1/"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/alexss1/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>

        <p>
          Costs <span>&copy; 2023 </span>
        </p>
      </footer>
    </>
  );
}

export default Footer;
