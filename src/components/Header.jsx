import ThemeToggle from "./ThemeToggle";
import "../styles/header.css";

function Header() {
  return (
    <header className="site-header">

      <div className="header-inner">

        {/* ========================================
            LOGO
        ======================================== */}

        <div className="site-logo">

          <img
            src="/images/Logo.jpg"
            alt="Lokesh"
          />

          <span>
            LOKESH
          </span>

        </div>


        {/* ========================================
            NAVIGATION
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
            RIGHT SIDE
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

      </div>

    </header>
  );
}

export default Header;