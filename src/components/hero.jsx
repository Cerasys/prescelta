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
              We help you get
              <span className="hro-gradient-text"> more customers</span>, who
              <span className="hro-gradient-text"> buy more</span> of your
              stuff, and{" "}
              <span className="hro-gradient-text">
                {" "}
                buy from you more often
              </span>
              <br />
            </h1>
            <p className="hro-display-paragraph">
              Hoshino Media is a growth agency for scaling DTC brands. We
              design, build, and optimize high-converting paid media and
              retention marketing systems (Email/SMS/Klaviyo).
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
