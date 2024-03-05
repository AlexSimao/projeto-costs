import { Outlet } from "react-router-dom";

import styles from "./Main.module.css";

function Main(props) {
  return (
    <div className={`${styles.Main} ${styles[props.custonClass]}`}>
      <Outlet />
    </div>
  );
}

export default Main;
