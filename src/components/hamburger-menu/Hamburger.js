import React from "react";
import styles from "./HamburgerMenu.module.scss";

const Hamburger = ({ className, onClick }) => (
  <div onClick={onClick} className={className}>
    <span className={styles.hamburger__box}>
      <span className={styles.hamburger__inner} />
    </span>
  </div>
);

export default Hamburger;
