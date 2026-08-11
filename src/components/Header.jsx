import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import "../styles/header.css";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <header className="site-header">

      <div className="header-inner">


        {/* ========================================
            LOGO
        ======================================== */}

        <a
          href="/"
          className="site-logo"
          onClick={closeMenu}
        >

          <img
            src="/images/Logo.jpg"
            alt="Lokesh"
          />

          <span>
            LOKESH
          </span>

        </a>



        {/* ========================================
            DESKTOP NAVIGATION
        ======================================== */}

        <nav className="main-nav">

          <a href="/">
            Home
          </a>

          <a href="/fancy-edits">
            Fancy Edits
          </a>

          <a href="/teasers">
            Teasers
          </a>

          <a href="/reels">
            Reels
          </a>

          <a href="/about">
            About
          </a>

        </nav>



        {/* ========================================
            DESKTOP RIGHT SIDE
        ======================================== */}

        <div className="header-actions">

          <ThemeToggle />

          <a
            href="/contact"
            className="contact-link"
          >
            Contact
          </a>

        </div>



        {/* ========================================
            MOBILE MENU BUTTON
        ======================================== */}

        <button
          type="button"
          className={`mobile-menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >

          <span></span>
          <span></span>

        </button>

      </div>



      {/* ========================================
          MOBILE MENU
      ======================================== */}

      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        <nav className="mobile-nav">

          <a
            href="/"
            onClick={closeMenu}
          >
            <span>01</span>
            Home
          </a>

          <a
            href="/fancy-edits"
            onClick={closeMenu}
          >
            <span>02</span>
            Fancy Edits
          </a>

          <a
            href="/teasers"
            onClick={closeMenu}
          >
            <span>03</span>
            Teasers
          </a>

          <a
            href="/reels"
            onClick={closeMenu}
          >
            <span>04</span>
            Reels
          </a>

          <a
            href="/about"
            onClick={closeMenu}
          >
            <span>05</span>
            About
          </a>

          <a
            href="/contact"
            onClick={closeMenu}
          >
            <span>06</span>
            Contact
          </a>

        </nav>


        <div className="mobile-menu-footer">

          <span>
            THEME
          </span>

          <ThemeToggle />

        </div>

      </div>

    </header>
  );
}

export default Header;