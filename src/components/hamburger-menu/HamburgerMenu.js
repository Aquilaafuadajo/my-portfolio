//Core
import React from "react";
import styles from "./HamburgerMenu.module.scss";

//Components
import Hamburger from "./Hamburger";
import Menu from "./Menu";

//Main JSX
class HamburgerMenu extends React.Component {
  state = {
    isOpen: false
  }; 

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleLinkClick = () => {
    this.setState({
      isOpen: false
    })
  };

  render() {
    return (
      <div>
        <div className={this.state.isOpen? `${styles.overlay}` : styles}></div>
        <Hamburger
          onClick={this.handleClick}
          className={
            this.state.isOpen
              ? `${styles.hamburger} ${styles.hamburgeractive}`
              : styles.hamburger
          }
        />
        <Menu
          handleLinkClick={this.handleLinkClick}
          className={
            this.state.isOpen
              ? `${styles.navigation} ${styles.navigationactive}`
              : styles.navigation
          }
        />
      </div>
    );
  }
}

export default HamburgerMenu;
