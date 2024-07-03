import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/Header.css"; // Import your CSS file

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <img src="./assets/Logo.svg" className="logo" />

      <nav className="nav">
        <div className={`reg-log ${isMobileMenuOpen ? "active" : ""}`}>
          <div className="reg">
            <button>REGISTER</button>
            <span>|</span>
            <button>LOGIN</button>
          </div>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="head-nav">
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li className="head-nav">
            <Link to="/collections" className="nav-link">
              COLLECTIONS
            </Link>
          </li>
          <li className="head-nav">
            <Link to="/artadvisory" className="nav-link">
              ART ADVISORY
            </Link>
          </li>
          <li className="head-nav">
            <Link to="/paintings" className="nav-link">
              PAINTINGS
            </Link>
          </li>
          <li className="head-nav">
            <Link to="/prints" className="nav-link">
              PRINTS
            </Link>
          </li>
          <li className="head-nav">
            <Link to="/cart">
              <img src="./assets/bucket.svg" className="bucket" alt="Cart" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
