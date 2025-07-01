import React from "react";
import "./brandServices.css"; // You'll create this CSS file

const BrandServices = () => {
  return (
    <div className="marketing-container">
      <div className="marketing-content">
        <div className="marketing-header">
          <h1>
            we are <span className="flex">hoshino media</span>
          </h1>
          <h4>your bridge to authentic audiences</h4>
          <h3>
            connecting medium to large-sized businesses with <br />
            <span className="highlight-brand">engaging creators</span> in the{" "}
            <span className="highlight-brand">
              entertainment, travel, and lifestyle
            </span>{" "}
            spaces.
          </h3>
          <br />
        </div>

        <div className="marketing-grid">
          <div className="marketing-column">
            <p className="highlight-brand">we find your perfect match,</p>
            <p>
              we start by diving deep into your brand, understanding your goals,
              and pinpointing your target audience.
            </p>
            <p>
              then, we leverage our network to identify full-time creators who
              genuinely resonate with your brand values and audience
              demographics.
            </p>
            <p>
              we focus on creators who are masters of storytelling, whether
              through entertaining content or expert information curation.
            </p>
          </div>

          <div className="marketing-column">
            <p className="highlight-brand">we manage the entire journey,</p>
            <p>
              from initial outreach and negotiation to content review and
              campaign launch, we handle all the details.
            </p>
            <p>
              we'll make sure there's smooth communication, timely deliverables,
              and compliance with terms, making the easy-peasy for you.
            </p>
            <p>
              we win if you win, and maximizing your ROI means long-term,
              successful partnerships between your brand and our creators.
            </p>
          </div>

          <div className="marketing-column">
            <p className="highlight-brand">and we deliver.</p>
            <p>
              whether you're looking for increased brand awareness, conversions,
              or engagement with new audiences, we build strategies to meet your
              objectives.
            </p>
            <p>
              we specialize in working with creators on YouTube, Instagram, and
              TikTok, understanding the nuances of each platform to optimize
              your campaign's reach and impact.
            </p>
            <p>
              we'll help you craft compelling narratives that captivate your
              (new) audience and drive meaningful connections.
            </p>
          </div>
        </div>
        <br />
        <div className="marketing-header">
          <h3>Ready to tell your brand's story?</h3>
        </div>
        <div className="marketing-footer">
          <a
            href="https://calendly.com/nathanblee/hoshino-media-discovery-call" // Update this link if you have a separate one for brands
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-brand btn-lg page-scroll shimmer-effect"
          >
            let's connect!
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandServices;
