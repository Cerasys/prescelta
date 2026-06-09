import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <header id="hro-section-canvas">
      <div className="hro-hero-viewport">
        {/* Deep Background Media Stream */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hro-bg-video-asset"
          poster="/img/downtown-lite.jpg"
        >
          <source src="/img/downtown-lite.mp4" type="video/mp4" />
        </video>

        {/* High-Fidelity Deep Dark Glass Tint Overlay */}
        <div className="hro-glass-matrix-overlay">
          <div className="hro-hero-text-frame">
            <h1 className="hro-display-header">
              We help brands build
              <br />
              <span className="hro-gradient-text">growth systems</span> that
              scale.
            </h1>

            <p className="hro-display-paragraph">
              We engineer ecosystems and revenue archietecture that prioritize
              always-on cashflow and maximize customer lifetime value.
            </p>

            <div className="hro-btn-center-wrap">
              <a href="/brands" className="hro-submit-btn">
                Show me How!
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
