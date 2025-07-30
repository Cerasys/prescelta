import React, { useState, useEffect } from "react";
import "./brands.css"; // Ensure your CSS file is imported
import BrandServices from "./brandServices";

const scrollingWords = [
  "messy",
  "misaligned",
  "cancelled",
  "low ROI",
  "inflated",
];

export const Brands = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // Set an interval to change the word
    const intervalId = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % scrollingWords.length
      );
    }, 2000); // Change word every 2 seconds (adjust this duration)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="brand">
      <div className="brand-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="brand-background-video"
          poster="/img/whiteboard.jpg"
        >
          <source src="/img/whiteboard.mp4" type="video/mp4" />
        </video>
        <div className="brand-video-overlay">
          <div className="row">
            <div className="col-md-12 intro-text">
              <h1>No more</h1>
              <h1>
                <span className="scrolling-words-container highlight">
                  <span
                    key={scrollingWords[currentWordIndex]} // Key prop triggers re-render and animation
                    className="scrolling-word-item highlight" // Apply class for animation
                  >
                    {scrollingWords[currentWordIndex]}
                  </span>
                </span>{" "}
              </h1>
              <h1>influencer campaigns</h1>
            </div>
          </div>
        </div>
      </div>
      <BrandServices />
    </div>
  );
};
