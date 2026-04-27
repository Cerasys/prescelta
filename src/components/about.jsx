import React from "react";
import "./about.css";
import MarkdownContent from "./markdownContent";
import { BOOKING_LINK } from "../data/constants";

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
              <h3 className="highlight">
                So if you're ready to leverage Growth Marketing to help scale
                your Brand...
              </h3>
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brand btn-lg page-scroll"
              >
                Book a call!
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
