import React, { useEffect, useState } from "react";
import "./leadMagnetHero.css";
import { useNavigate } from "react-router-dom";

const LeadMagnetHero = ({
  title,
  description,
  creatorName,
  imageSrc,
  magnetId,
  buttonText = "Get It Free",
  onSuccessPath = "/success",
}) => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Grab elements directly from the form target safely
    const formElements = e.target.elements;
    const nameValue = formElements.name.value.trim();
    const emailValue = formElements.email.value.trim();
    const honeypotValue = formElements.bfield.value.trim();

    // 1. Hard Safeguard: Kill submission if HTML5 validation was bypassed
    if (!nameValue || !emailValue) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    // 2. Honeypot Safeguard: If filled, fake a success so the bot thinks it won
    if (honeypotValue) {
      console.warn("Spam submission detected.");
      navigate(onSuccessPath, { state: { title: title } });
      return;
    }

    // 3. Safe, clean submission payload matching Netlify's exact expectations
    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        navigate(onSuccessPath, { state: { title: title } });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="lm-hero-wrapper">
      <div className="lm-hero-container">
        {/* Content Side */}
        <div className="lm-content-side">
          <div className="lm-text-group">
            <h1 className="lm-title">{title}</h1>
            <p className="lm-description">{description}</p>
          </div>

          {/* Glassmorphism Form */}
          <div className="lm-glass-card">
            <form
              name="lead-magnet-master"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="lm-form"
              data-netlify-honeypot="bfield"
            >
              <input
                type="hidden"
                name="form-name"
                value="lead-magnet-master"
              />
              <input type="hidden" name="magnetId" value={magnetId} />
              <div hidden>
                <input name="bfield" />
              </div>

              {/* Renders the error message if it exists */}
              {errorMessage && (
                <p
                  className="lm-error-msg"
                  style={{
                    color: "#ff4d4d",
                    marginBottom: "1rem",
                    fontSize: "0.9rem",
                  }}
                >
                  {errorMessage}
                </p>
              )}

              <div className="lm-input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="lm-input"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="lm-input"
                />
              </div>

              <button type="submit" className="lm-submit-btn">
                {buttonText}
              </button>
            </form>
          </div>

          {creatorName && (
            <p className="lm-creator-tag">
              Created by <span className="lm-creator-name">{creatorName}</span>
            </p>
          )}
        </div>

        {/* Visual Side */}
        <div className="lm-visual-side">
          <div className="lm-glow-effect" />
          <div className="lm-image-container">
            <img src={imageSrc} alt={title} className="lm-main-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetHero;
