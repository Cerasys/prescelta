import React from "react";
import { Link } from "react-router-dom";
import "./404.css"; // Make sure this path correctly points to your CSS file folder

export const NotFound = () => {
  return (
    <div className="res-hub-wrapper fullscreen-center">
      <div className="res-section-block">
        <div className="res-hub-container res-404-container">
          {/* Glass Card Panel Wrapper */}
          <div className="res-glass-card error-panel">
            {/* 404 Glow Header */}
            <h1 className="res-404-glow-title">404</h1>

            {/* Main Section Title */}
            <h2 className="res-main-title error-subtitle">
              Lost in a Weird Dimension
            </h2>

            {/* Premium Divider Line */}
            <div className="res-404-divider" />

            {/* Dark Aesthetic Subtitle Paragraph */}
            <p className="res-main-subtitle error-paragraph">
              The page you're looking for doesn't exist or has been moved into
              an alternate dimension. Let's get you back.
            </p>

            {/* Interactive Action Element */}
            <div className="btn-container error-action">
              <Link to="/" className="btn btn-custom shimmer-effect error-btn">
                Return to Reality
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
