import React from "react";
import "./creatorServices.css";

const CreatorServices = () => {
  return (
    <div className="marketing-container">
      <div className="marketing-content">
        <div className="marketing-header">
          <h1>
            we are <span className="highlight-brand">hoshino media</span>
          </h1>
          <br />
        </div>

        {/* New container for desktop images */}
        <div className="marketing-images-desktop">
          <img src="/img/production.jpg" alt="Creative process" />
          <img src="/img/timeline.jpg" alt="Editing process" />
          {/* Add more images here if needed for desktop view */}
        </div>

        <div className="marketing-grid">
          <div className="marketing-column">
            <p className="highlight-brand">your hypeman,</p>
            <p>
              we start by learning your story and what makes you one-of-a-kind.​
            </p>
            <p>
              from there, we advocate you to our network of high-profile brand
              partners, so you land more deals then ever before.
            </p>
          </div>
          <div className="creator-image-mobile">
            <img src="/img/production.jpg" alt="Creative process" />{" "}
          </div>
          <div className="marketing-column">
            <p className="highlight-brand">project manager,</p>
            <p>we make sure you understand everything about the deal.</p>
            <p>
              deliverables, legal, your cut, and we'll fight for your right to
              be creative{" "}
            </p>
          </div>
          <div className="creator-image-mobile">
            <img src="/img/timeline.jpg" alt="Creative process" />{" "}
          </div>

          <div className="marketing-column">
            <p className="highlight-brand">and dedicated advisor</p>
            <p>
              What's your grand plan for your business?
              <br /> Do you want to create spinoff products?
              <br /> How far do you want to grow your community?
            </p>
            <p>
              We'll sit down and identify your goals, and work together to help
              you move towards them.
            </p>
          </div>
        </div>
        <br />
        <div className="marketing-header">
          <h3>
            we exist to help you create wildly while keeping brands fair and
            accountable
          </h3>
        </div>
        <div className="marketing-header">
          <h3>If that sounds like a dream come true...</h3>
        </div>
        <div className="marketing-footer">
          <a
            href="https://calendly.com/hoshinomedia/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-custom btn-lg page-scroll shimmer-effect"
          >
            Book a call!
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreatorServices;
