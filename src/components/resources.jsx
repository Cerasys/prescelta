import React from "react";
import "./faq.css";
import MarkdownContent from "./markdownContent";

export const Resources = () => {
  return (
    <div id="resources">
      <div className="faq container">
        <div className="row">
          <div className="about-text">
            <br />
            <MarkdownContent markdownPath="/content/resources.md" />
            <br />
            <a
              href="https://calendly.com/nathanblee/hoshino-media-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-custom btn-brand btn-lg page-scroll"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
