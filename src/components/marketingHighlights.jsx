import React from "react";
import "./marketingHighlights.css";

const MarketingHighlights = () => {
  return (
    <div className="marketing-container">
      <div className="marketing-content">
        <div className="marketing-header">
          <h1>
            we are <span className="flex">hoshino media</span>
          </h1>
        </div>

        <div className="marketing-grid">
          <div className="marketing-column">
            <p className="highlight">your personal salesmen</p>
            <p>
              we sell your story, your positive influence, and your
              one-of-a-kind value.​
            </p>
            <p>you become a familiar name to our network of</p>
            <p>high-profile brand partners.</p>
            <p>we capitalize on all inbound + outbound opportunities.​</p>
          </div>

          <div className="marketing-column">
            <p className="highlight">your project manager</p>
            <p>we handle all of brand partnership logistics.</p>
            <p>not just tracking deliverables and timelines,</p>
            <p>but all things legal, finance, crisis management</p>
            <p>and ensuring you become a brand's best friend.​</p>
          </div>

          <div className="marketing-column">
            <p className="highlight">your dedicated advisor</p>
            <p>we possess years of industry expertise for your use.</p>
            <p>
              we have the network and partners to take you to another level.
            </p>
          </div>
        </div>

        <div className="marketing-footer">
          <a href="/apply" className="cta-button">
            Apply as a Creator
          </a>
        </div>
      </div>
    </div>
  );
};

export default MarketingHighlights;
