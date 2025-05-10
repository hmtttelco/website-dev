import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <nav className="nav-base">
        <a href="/">
          <img className="navIcon" src="/icon/logohmtt.png" alt="logohmtt" />
        </a>

        <div className="base-2">
          <a className="nav-list" href="/">
            Home
          </a>
          <a className="nav-list" href="/kabinethmtt">
            About Us
          </a>
          <a className="nav-list" href="/laboratory">
            Laboratory
          </a>
          <a className="nav-list" href="/ebook">
            E-Book
          </a>
          <a className="nav-list" href="/article">
            Article
          </a>
          <a className="nav-list-bold">Shop</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
