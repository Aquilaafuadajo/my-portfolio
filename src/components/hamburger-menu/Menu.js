//Core
import React from "react";
import styles from "./HamburgerMenu.module.scss";

const Menu = ({ className }) => (
  <div className={className}>
    <ul className={styles.navigation__list}>
      <li className={styles.navigation__item}>
        <a href="/">HOME</a>{" "}
      </li>
      <li className={styles.navigation__item}>
        <a href="/about">DEF</a>
      </li>
      <li className={styles.navigation__item}>
        <a href="/contact">GHI</a>
      </li>
      <li className={styles.navigation__item}>
        <a href="/skill">JKL</a>
      </li>
    </ul>
  </div>
);

export default Menu;
