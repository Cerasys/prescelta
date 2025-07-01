import React from "react";
import "./creatorServices.css";

const CreatorServices = () => {
  return (
    <div className="marketing-container">
      <div className="marketing-content">
        <div className="marketing-header">
          <h1>
            we are <span className="flex">hoshino media</span>
          </h1>
          <h4>a small but mighty team</h4>
          <h3>
            that exists to help you tell your story while helping you partner
            with your dream brands
          </h3>
          <br />
        </div>

        <div className="marketing-grid">
          <div className="marketing-column">
            <p className="highlight">we're your hypeman,</p>
            <p>
              we start by learning your story, your audience, and what makes you
              one-of-a-kind.​
            </p>
            <p>
              from there, we advocate you to our network of high-profile brand
              partners, so you land more partnerships then ever before.
            </p>
            <p>
              then we'll work together to create a strategy to land your dream
              brand.​
            </p>
          </div>

          <div className="marketing-column">
            <p className="highlight">your project manager,</p>
            <p>we handle all the grunt work of your brand partnerships.</p>
            <p>
              not just basic stuff like tracking deliverables and timelines...
            </p>
            <p>but all things legal, finance, crisis management</p>
            <p>and ensuring you become a brand's best friend.​</p>
          </div>

          <div className="marketing-column">
            <p className="highlight">and your dedicated advisor</p>
            <p>
              What's your grand plan for your business?
              <br />
              Do you want to make content for forever?
              <br /> Do you want to create spinoff products?
              <br /> How far do you want to scale your community?
            </p>
            <p>
              We'll sit down and identify your goals, and work together to help
              you move towards them.
            </p>
          </div>
        </div>
        <br />
        <div className="marketing-header">
          <h3>Sound like a plan?</h3>
        </div>
        <div className="marketing-footer">
          <a
            href="https://calendly.com/hoshinomedia/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-custom btn-lg page-scroll shimmer-effect"
          >
            that sounds dope!
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreatorServices;
