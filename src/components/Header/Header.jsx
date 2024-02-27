import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <div className="logo-text">TestTask</div>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink className="header__nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className="header__nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className="header__nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className="header__nav-link" to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
