import React from 'react';
import {Link} from 'react-router-dom';

import './hmbg.scss'

export default function Hamburger() {
  return (
    <div className="container">
    <input id="toggle" type="checkbox" />
      <label className="toggle-container" htmlFor="toggle">
        <span className="button button-toggle"></span>
      </label>
      <nav className="nav">
        <Link className="nav-item" to="/">HOME</Link>
        <Link className="nav-item" to="/about">ABOUT</Link>
        <Link className="nav-item" to="/skill">SKILL</Link>
        <Link className="nav-item" to="/mywork">MY WORK</Link>
        <Link className="nav-item" to="/contact">CONTACT</Link>
      </nav>
    </div>
  )
}
