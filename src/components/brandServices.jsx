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
    <div className="marketing-container">
      <div className="marketing-content">
        <div className="marketing-header">
          <h3>
            Say hello to your new growth operators,
            <br />
            who <span className="highlight">scale brands</span> in the{" "}
            <span className="highlight">ecommerce</span> space
          </h3>
          <br />
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-accent">{service.highlight}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-list">
                {service.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
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
            href={BOOKING_LINK}
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
