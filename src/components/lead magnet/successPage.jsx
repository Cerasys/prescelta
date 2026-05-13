import React from "react";
import "./leadMagnetHero.css";
import { useLocation } from "react-router-dom";

export const SuccessPage = () => {
  const location = useLocation();
  const displayTitle = location.state?.title || "Guide";

  return (
    <div className="lm-hero-wrapper">
      <div
        className="lm-glass-card"
        style={{ textAlign: "center", maxWidth: "600px" }}
      >
        <h1 className="lm-title" style={{ fontSize: "4rem" }}>
          You're In! 🚀
        </h1>
        <p className="lm-description" style={{ margin: "0 auto 24px" }}>
          We just sent our <b>{displayTitle}</b> to your email.
        </p>
        <p className="suc-message">
          If you don't see it, check your Promotions folder.
        </p>
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.1)",
            marginBottom: "40px",
          }}
        />
        <h3 style={{ fontSize: "2rem", marginBottom: "12px", color: "white" }}>
          Want to skip the manual setup?
        </h3>
        <p
          className="lm-description"
          style={{
            fontSize: "1.75rem",
            margin: "0 auto",
            marginBottom: "12px",
          }}
        >
          We help businesses install revenue architecture in 48 hours. Let’s see
          if we’re a fit.
        </p>
        <a
          href="https://book.hoshinomedia.com"
          className="lm-submit-btn"
          target="_blank "
          style={{
            display: "block",
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          Book a Call
        </a>
      </div>
    </div>
  );
};
