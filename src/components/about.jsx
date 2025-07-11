import React from "react";
import "./about.css";
import MarkdownContent from "./markdownContent";

export const About = () => {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="about-text">
              <h2>Our Story</h2>
              <MarkdownContent markdownPath="/content/about1.md" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="about-text">
              <MarkdownContent markdownPath="/content/about2.md" />
            </div>
            <div className="about-text">
              <MarkdownContent markdownPath="/content/about3.md" />
            </div>
            <div className="btn-container">
              <h3>
                So if you're ready to leverage Influencer Marketing to help your
                Organic, Paid Media, Retail, Customer Experience, and Your
                Bottom Line...
              </h3>
              <a
                href="https://calendly.com/hoshinomedia/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-custom btn-lg page-scroll"
              >
                I'm a Creator, Show me How!
              </a>{" "}
              <a
                href="https://calendly.com/nathanblee/hoshino-media-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brand btn-lg page-scroll"
              >
                I'm a Brand, Show me How!
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
