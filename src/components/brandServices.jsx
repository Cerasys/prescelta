import React from "react";
import "./brandServices.css";
import { BOOKING_LINK } from "../data/constants";

const BrandServices = () => {
  const services = [
    {
      title: "Paid Media",
      highlight: "Scaling things up",
      description:
        "We overhaul your paid media approach, writing and testing magnetic creatives for Meta and Google Platforms.",
      items: [
        "Creative Testing",
        "Media Buying",
        "Ad Copywriting",
        "Full Campaign",
      ],
    },
    {
      title: "Influencer & Storytelling",
      highlight: "Finding your perfect match",
      description:
        "No more boring content. We source creators who align with your values and handle all negotiations and reviews.",
      items: ["Creator Sourcing", "Contract Negotiation", "Content Review"],
    },
    {
      title: "Webstore & CRO",
      highlight: "Stopping the leaks",
      description:
        "A fast site is a high-converting site. We audit your infrastructure to ensure traffic doesn't go to waste.",
      items: [
        "Infrastructure Audits",
        "UX/UI Optimization",
        "Conversion Lifting",
      ],
    },
    {
      title: "Email & SMS Marketing",
      highlight: "Maximizing LTV",
      description:
        "We build retention loops that turn one-time buyers into lifelong fans through high-intent automation.",
      items: ["Retention Flows", "Campaign Management", "List Growth"],
    },
  ];

  return (
    <div className="srv-hub-wrapper">
      <div className="srv-hub-container">
        <div className="srv-header-block">
          <h2 className="srv-main-subtitle">
            Say hello to your new growth operators, who{" "}
            <span className="srv-gradient-text">scale brands</span> in the{" "}
            <span className="srv-gradient-text">ecommerce</span> space
          </h2>
        </div>

        {/* High-Fidelity Glassmorphism Grid */}
        <div className="srv-cards-grid">
          {services.map((service, index) => (
            <div key={index} className="srv-glass-card">
              <span className="srv-card-accent">{service.highlight}</span>
              <h3 className="srv-card-title">{service.title}</h3>
              <p className="srv-card-description">{service.description}</p>
              <ul className="srv-pills-list">
                {service.items.map((item, i) => (
                  <li key={i} className="srv-pill-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Agency Identity & Bottom Conversion Frame */}
        <div className="srv-agency-outro">
          <h1 className="srv-agency-title">
            we are <span className="srv-brand-highlight">hoshino media</span>
          </h1>
          <h4 className="srv-agency-subtitle">
            Your bridge to authentic audiences
          </h4>
        </div>

        <div className="srv-footer-callout">
          <div className="srv-glow-effect" />
          <div className="srv-callout-inner">
            <h3
              style={{
                fontSize: "2.6rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "24px",
                letterSpacing: "-0.02em",
              }}
            >
              Ready for the smoothest marketing campaign ever?
            </h3>
            <div className="srv-btn-center-wrap">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="srv-submit-btn"
              >
                Book a call!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandServices;
