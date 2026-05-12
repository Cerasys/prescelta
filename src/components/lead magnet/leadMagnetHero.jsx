import React from "react";
import "./leadMagnetHero.css";

const LeadMagnetHero = ({
  title,
  description,
  creatorName,
  imageSrc,
  formName,
  buttonText = "Get It Free",
  onSuccessPath = "/success",
}) => {
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
              name={formName}
              method="POST"
              data-netlify="true"
              action={onSuccessPath}
              className="lm-form"
            >
              <input type="hidden" name="form-name" value={formName} />

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
