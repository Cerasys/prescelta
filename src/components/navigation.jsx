import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  // 1. Manage the menu collapse state natively in React
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Helper function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // 3. Helper function to toggle the menu state when hitting the hamburger button
  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            // Use standard conditional class strings to toggle formatting look dynamically
            className={`navbar-toggle ${isMenuOpen ? "" : "collapsed"}`}
            onClick={handleToggleClick}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <Link
            className="navbar-brand page-scroll logo"
            to="/#page-top"
            onClick={handleLinkClick} // Closes menu if brand logo is clicked
          >
            <img
              src="img/logo_juicy.png"
              alt="Juicy Logo"
              style={{ maxWidth: "80px" }}
            />
          </Link>
        </div>

        {/* 4. Append 'in' conditionally so modern UI transitions process seamlessly */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "in" : ""}`}
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/brands" onClick={handleLinkClick}>
                The Operator Framework
              </Link>
            </li>
            <li>
              <Link to="/testimonials" onClick={handleLinkClick}>
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={handleLinkClick}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/resources" onClick={handleLinkClick}>
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
