import React from "react";
import "./brands.css";
import Testimonials from "./testimonials/testimonials";

export const Brands = () => {
  return (
    <div className="brand">
      <div className="brand-video-container">
        <video
          autoPlay // Start playing automatically
          loop // Loop the video
          muted // Crucial for autoplay to work in most modern browsers
          playsInline // Important for iOS Safari to play inline rather than fullscreen
          className="brand-background-video" // CSS class for styling the video
          poster="/img/color-poster.jpg"
        >
          <source src="/img/color-grading.mp4" type="video/mp4" />
        </video>
        <div className="brand-video-overlay">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
              <h1>
                Partner with{" "}
                <span className="highlight text"> Authenticity</span>
              </h1>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      {/* here you should have a section on brands we've partnered with as well as testimonials */}
      <Testimonials />
    </div>
  );
};
