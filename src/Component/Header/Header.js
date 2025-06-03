import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <nav className="nav-base">
        {/* Logo */}
        <a href="/" className="logo-section">
          <img className="navIcon" src="/icon/logohmtt.png" alt="logohmtt" />
        </a>

        {/* Desktop Menu */}
        <div className="base-2 desktop-menu">
          <a className="nav-list" href="/">Home</a>
          <a className="nav-list" href="/kabinethmtt">About Us</a>
          <a className="nav-list" href="/laboratory">Laboratory</a>
          <a className="nav-list" href="/ebook">E-Book</a>
          <a className="nav-list" href="https://medium.com/@hmtt.telco">Article</a>
          <a className="nav-list-bold" href="#">Shop</a>
        </div>

        {/* Mobile Right Side */}
        <div className="mobile-right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="/">Home</a>
          <a href="/kabinethmtt">About Us</a>
          <a href="/laboratory">Laboratory</a>
          <a href="/ebook">E-Book</a>
          <a href="/article">Article</a>
          <a href="#">Shop</a>
        </div>
      )}
    </div>
  );
};

export default Header;
