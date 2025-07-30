import React, { useEffect, useState } from "react";

const scrollingWords = [
  "messy",
  "misaligned",
  '"When\'s the deadline?"',
  "cancelled",
  "ghosted",
  "budget-breaking",
  "low ROI",
  "low-impact",
  "untracked",
  "uncreative",
  "off-brand",
  "spammy",
  "fake",
];

export const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // Set an interval to change the word
    const intervalId = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % scrollingWords.length
      );
    }, 2500); // Change word every 2 seconds (adjust this duration)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <header id="header">
      <div className="intro">
        <video
          autoPlay // Start playing automatically
          loop // Loop the video
          muted // Crucial for autoplay to work in most modern browsers
          playsInline // Important for iOS Safari to play inline rather than fullscreen
          className="creators-background-video" // CSS class for styling the video
          poster="/img/downtown-lite.jpg"
        >
          <source src="/img/downtown-lite.mp4" type="video/mp4" />
        </video>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 intro-text">
                <h1>No more </h1>
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
                <h1>Influencer Campaigns</h1>
                <br />
                <p>
                  Experience influencer marketing done with clarity, creativity,
                  and results.
                </p>
                <a
                  href="/creators"
                  rel="noopener noreferrer"
                  className="btn btn-custom btn-lg page-scroll shimmer-effect"
                >
                  <b>I'm a Creator, Show me How!</b>
                </a>{" "}
                <a
                  href="/brands"
                  rel="noopener noreferrer"
                  className="btn btn-brand btn-lg page-scroll shimmer-effect"
                >
                  <b>I'm a Brand, Show me How!</b>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
