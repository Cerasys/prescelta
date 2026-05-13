import React, { useEffect } from "react";
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

  useEffect(() => {
    const previousTitle = document.title; // Save the old title
    document.title = title; // Set it to "Top Email Flows for 2026"

    // This runs when the component disappears/unmounts
    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        // We pass the 'title' inside the 'state' object so the next page can read it
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
            >
              <input
                type="hidden"
                name="form-name"
                value="lead-magnet-master"
              />
              <input type="hidden" name="magnetId" value={magnetId} />

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
