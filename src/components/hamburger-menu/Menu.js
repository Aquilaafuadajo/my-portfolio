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
        <a href="/about">ABOUT</a>
      </li>
      <li className={styles.navigation__item}>
        <a href="/skill">SKILLS</a>
      </li>
      <li className={styles.navigation__item}>
        <a href="/mywork">WORK</a>
      </li>
      <li className={styles.navigation__item}>
        <a href="/contact">CONTACT</a>
      </li>
    </ul>
  </div>
);

export default Menu;
