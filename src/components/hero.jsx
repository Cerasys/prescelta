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
              We build
              <span className="hro-gradient-text"> revenue architecture</span>
              <br />
              for creators building
              <span className="hro-gradient-text"> real brands.</span>
            </h1>
            <p className="hro-display-paragraph">
              You have the attention, and we'll build the engine. Hoshino Media
              partners with creators to turn views into high-margin physical
              products and take the operational chaos and logistics completely
              off your plate.
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
