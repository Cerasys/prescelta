import React, { useState, useEffect } from "react";
import "./brands.css";
import BrandServices from "./brandServices";

const scrollingWords = [
  "ineffective",
  "unpredictable",
  "time-wasting",
  "budget-draining",
  "scattershot",
  "low-return",
  "off-brand",
  "untracked",
  "low-ROI",
  "'ads-that-don't-convert'",
  "fatigued creatives",
];

export const Brands = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % scrollingWords.length,
      );
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="brnd-viewport-root">
      {/* Background Video Glass Module Container */}
      <div className="brnd-hero-viewport">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="brnd-bg-video-asset"
          poster="/img/whiteboard-lite.jpg"
        >
          <source src="/img/whiteboard.mp4" type="video/mp4" />
        </video>

        {/* Blended Glassmorphism Dark Layer Overlay */}
        <div className="brnd-glass-matrix-overlay">
          <div className="brnd-hero-text-frame">
            <h1 className="brnd-display-header">
              Say goodbye to
              <span className="brnd-ticker-window">
                <span
                  key={scrollingWords[currentWordIndex]}
                  className="brnd-animated-word-item"
                >
                  {scrollingWords[currentWordIndex]}
                </span>
              </span>
              marketing campaigns
            </h1>
          </div>
        </div>
      </div>

      {/* Render the upgraded layout component directly below */}
      <BrandServices />
    </div>
  );
};
