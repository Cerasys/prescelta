import React, { useState, useEffect } from "react"; // Import useState and useEffect
import "./creators.css";
import CreatorServices from "./creatorServices";

// Define the words you want to scroll for the Creators page
const scrollingWords = [
  "unclear partnerships",
  "unfair compensation",
  "lack of creative control",
  "getting ghosted by the brand",
  "uncontrollable negotiations",
];

export const Creators = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // Set an interval to change the word
    const intervalId = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % scrollingWords.length
      );
    }, 2500);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="creators">
      <div className="creators-video-container">
        <video
          autoPlay // Start playing automatically
          loop // Loop the video
          muted // Crucial for autoplay to work in most modern browsers
          playsInline // Important for iOS Safari to play inline rather than fullscreen
          className="creators-background-video" // CSS class for styling the video
          poster="/img/editing-poster-lite.jpg"
        >
          <source src="/img/editing.mp4" type="video/mp4" />
        </video>
        <div className="creators-video-overlay">
          <div className="row">
            <div className="col-md-12 intro-text">
              <h1 className="static-header-part">Put an end to</h1>
              <h1 className="scrolling-header-part">
                {/* Dynamically render the scrolling word */}
                <span className="scrolling-words-container highlight">
                  <span
                    key={scrollingWords[currentWordIndex]} // Key prop triggers re-render and animation
                    className="scrolling-word-item highlight" // Apply class for animation
                  >
                    {scrollingWords[currentWordIndex]}
                  </span>
                </span>
              </h1>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <CreatorServices />
    </div>
  );
};
