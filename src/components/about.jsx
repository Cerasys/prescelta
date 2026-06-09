import React from "react";
import "./about.css";
import MarkdownContent from "./markdownContent";
import { BOOKING_LINK } from "../data/constants";

export const About = () => {
  return (
    <div className="abt-hub-wrapper">
      <div className="abt-hub-container">
        {/* Clean, Sequential Vertical Editorial Stack */}
        <div className="abt-timeline-stack">
          <div className="abt-glass-card">
            <div className="abt-header-block">
              <h1 className="abt-main-title">Our Story</h1>
            </div>
            <div className="abt-markdown-wrapper">
              <MarkdownContent markdownPath="/content/about1.md" />
              <MarkdownContent markdownPath="/content/about2.md" />
              <MarkdownContent markdownPath="/content/about3.md" />
            </div>
          </div>
        </div>

        {/* Bottom Conversion Block */}
        <div className="abt-footer-callout">
          <div className="abt-glow-effect" />
          <div className="abt-callout-inner">
            <h3
              style={{
                fontSize: "2.8rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "16px",
                letterSpacing: "-0.03em",
              }}
            >
              Ready to build your brand's operational engine?
            </h3>
            <div className="abt-btn-center-wrap">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="abt-submit-btn"
              >
                Book an operational audit!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
