import React from "react";
import "./landingPage.css";
import { BOOKING_LINK } from "../../data/constants";

export default function SocialLandingPage(props) {
  const youtubeUrl = "https://www.youtube.com/@nathanbelee";
  // Tip: Replace with specific video URL if desired, e.g. "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"

  return (
    <div className="lp-wrapper">
      <div className="lp-container">
        {/* Hero Section */}
        <header className="lp-hero">
          <span className="lp-badge">EXCLUSIVE FOR {props.platform}</span>
          <h1 className="lp-title">Level Up Your Brain and Your Wallet</h1>
          <p className="lp-subtitle"></p>
        </header>

        {/* Action Cards / Thumbnails */}
        <div className="lp-grid">
          {/* Card 1: YouTube / Video Breakdown */}
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="lp-card-link"
          >
            <div className="lp-card">
              <div className="lp-glow" />
              <div className="lp-thumbnail-wrapper">
                <img
                  src="https://img.youtube.com/vi/nO9p-7UNK3k/hqdefault.jpg"
                  alt="YouTube Video Preview"
                  className="lp-thumbnail"
                  onError={(e) => {
                    // Fallback visually if specific video thumbnail isn't used
                    e.target.style.display = "none";
                  }}
                />
                <div className="lp-play-badge">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Watch Content</span>
                </div>
              </div>

              <div className="lp-card-content">
                <div className="lp-card-tag">YouTube</div>
                <h3 className="lp-card-title">🧠 Feed your mind</h3>
                <p className="lp-card-desc">
                  Explore full breakdowns, organic distribution strategies, and
                  high-converting video systems on YouTube.
                </p>
                <span className="lp-btn lp-btn-yt">
                  Explore Nathan's YouTube
                </span>
              </div>
            </div>
          </a>

          <a
            href={BOOKING_LINK + props.platformURI}
            target="_blank"
            rel="noopener noreferrer"
            className="lp-card-link"
          >
            <div className="lp-card lp-card-highlight">
              <div className="lp-glow" />
              <div className="lp-thumbnail-wrapper lp-booking-thumb">
                <img
                  src="/img/working3.jpg"
                  alt="Nathan Lee"
                  className="lp-thumbnail"
                />

                {/* Calendar SVG Badge Overlay */}
                <div className="lp-play-badge">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Strategy Call</span>
                </div>
              </div>

              <div className="lp-card-content">
                <div className="lp-card-tag lp-tag-accent">
                  BOOK A STRATEGY CALL
                </div>
                <h3 className="lp-card-title">💵 Feed your wallet</h3>
                <p className="lp-card-desc">
                  Schedule a call with Nathan to discuss how we can revamp your
                  offers, paid media, retention marketing, and more.
                </p>
                <span className="lp-btn lp-btn-primary">
                  Book Nathan's Calendar
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
