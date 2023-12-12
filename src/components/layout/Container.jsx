import { Outlet } from "react-router-dom";

import styles from "./Container.module.css";

function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.custonClass]}`}>
      <Outlet />
    </div>
  );
}

export default Container;
