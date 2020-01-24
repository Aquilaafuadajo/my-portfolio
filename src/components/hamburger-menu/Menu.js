import React from "react";
import {Link} from 'react-router-dom';

import styles from "./HamburgerMenu.module.scss";

const Menu = ({ className, handleLinkClick }) => (
  <div className={className}>
    <ul className={styles.navigation__list}> 
      <li className={styles.navigation__item}>
        <Link to="/" onClick={handleLinkClick}>HOME</Link>{" "}
      </li>
      <li className={styles.navigation__item}>
        <Link to="/about" onClick={handleLinkClick}>ABOUT</Link>
      </li>
      <li className={styles.navigation__item}>
        <Link to="/skill" onClick={handleLinkClick}>SKILL</Link>
      </li>
      <li className={styles.navigation__item}>
        <Link to="/mywork" onClick={handleLinkClick}>WORK</Link>
      </li>
      <li className={styles.navigation__item}>
        <Link to="/contact" onClick={handleLinkClick}>CONTACT</Link>
      </li>
    </ul>
  </div>
);

export default Menu;
