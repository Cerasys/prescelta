import React from "react";
import "./brandServices.css";
import { BOOKING_LINK } from "../data/constants";

const BrandServices = () => {
  const services = [
    {
      title: "Paid Amplicifcation",
      highlight: "Scaling beyond organic algorithms",
      description:
        "We turn your highest-performing content into an asset. We engineer, test, and scale paid acquisition systems across Meta and Google without wearing out your core audience.",
      items: [
        "Asset Scaling",
        "Algorithmic Leverage",
        "AI Optimization",
        "Omnichannel Growth",
      ],
    },
    {
      title: "Network Multipliers",
      highlight: "Cross-pollinating communities",
      description:
        "We position your brand inside the ecosystems of peer creators. We manage the relationships, whitelisting, and community-first integrations that drive compounding organic growth.",
      items: [
        "Peer Creator Whitelisting",
        "Ecosystem Integration",
        "Co-Branded Collabs",
      ],
    },
    {
      title: "Storefront Architecture",
      highlight: "High-velocity conversion",
      description:
        "We build custom digital storefronts engineered to survive viral traffic spikes.",
      items: [
        "Infrastructure Audits",
        "UX/UI Optimization",
        "Conversion Lifting",
      ],
    },
    {
      title: "Revenue Architecture",
      highlight: "Always-on monetization",
      description:
        "We build Email & SMS ecosystems built for retention. Tracking high-intent customers allows for personalization that turn casual viewers into lifetime buyers while you sleep.",
      items: [
        "Retention Infrastructure",
        "Data-Driven Personalization",
        "Predictable Cashflow Loops",
      ],
    },
  ];

  return (
    <div className="srv-hub-wrapper">
      <div className="srv-hub-container">
        <div className="srv-header-block">
          <h2 className="srv-main-subtitle">
            Say hello to your new growth operators. We help{" "}
            <span className="srv-gradient-text">world-class creators</span>
            <br />
            build <span className="srv-gradient-text">high-yield brands.</span>
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
            The backend operational engine for your unfair advantage.
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
              Ready to stop running a channel and start building an enterprise?
            </h3>
            <div className="srv-btn-center-wrap">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="srv-submit-btn"
              >
                Apply for an operational audit!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandServices;
