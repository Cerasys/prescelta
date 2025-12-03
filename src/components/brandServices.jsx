import React from "react";
import "./brandServices.css";

const BrandServices = () => {
  return (
    <div className="marketing-container">
      <div className="marketing-content">
        <div className="marketing-header">
          <h3>
            supercharging businesses and startups with <br />
            <span className="highlight">storytellers and scale</span> in the{" "}
            <span className="highlight">ecommerce</span> spaces.
          </h3>
          <br />
        </div>

        {/* New container for desktop images */}
        <div className="marketing-images-desktop">
          <img src="/img/creator.jpg" alt="Creative process" />
          <img src="/img/editing.jpg" alt="Editing process" />
          {/* Add more images here if needed for desktop view */}
        </div>

        <div className="marketing-grid">
          <div className="marketing-column">
            <p className="highlight">we find your perfect match,</p>
            <div className="brand-image-mobile">
              <img src="/img/creator.jpg" alt="Creative process" />{" "}
            </div>
            <p>
              no more creators that will leave your audience bored, or worse
              yet, get you cancelled.
            </p>
            <p>
              we focus on creators who are master storytellers, who have full
              alignment for your brand values, and do all the negotiation and
              content review/
            </p>
          </div>

          <div className="marketing-column">
            <p className="highlight">we scale things up,</p>
            <div className="brand-image-mobile">
              <img src="/img/editing.jpg" alt="Editing process" />{" "}
            </div>
            <p>
              we completely overhaul your paid media approach, working side by
              side to find, write, and test creatives that will be magnetic to
              your audience.
            </p>
            <p>
              we'll make sure there's smooth communication, timely deliverables,
              and compliance with terms, making the easy-peasy for you.
            </p>
          </div>

          <div className="marketing-column">
            <p className="highlight">and we deliver.</p>
            {/* If you have a third image for mobile, add it here */}
            <p>
              whether you're looking for increased brand awareness, conversions,
              or engagement with new audiences, we build strategies to meet your
              objectives.
            </p>
            <p>
              we work with creators and run ads on YouTube, Facebook, Instagram,
              and TikTok, and understand the nuances of each platform.
            </p>
          </div>
        </div>

        <div className="marketing-header">
          <h1>
            we are <span className="highlight">hoshino media</span>
          </h1>
          <h4>Your bridge to authentic audiences</h4>
        </div>
        <div className="marketing-header">
          <h3>Ready for the smoothest marketing campaign ever?</h3>
        </div>
        <div className="marketing-footer">
          <a
            href="https://calendly.com/nathanblee/hoshino-media-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-brand btn-lg page-scroll shimmer-effect"
          >
            Book a call!
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandServices;
