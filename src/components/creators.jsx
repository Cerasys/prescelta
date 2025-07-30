import React from "react";
import "./creators.css";
import CreatorServices from "./creatorServices";
import Testimonials from "./testimonials/testimonials";

export const Creators = () => {
  return (
    <div className="creators">
      <div className="creators-video-container">
        <video
          autoPlay // Start playing automatically
          loop // Loop the video
          muted // Crucial for autoplay to work in most modern browsers
          playsInline // Important for iOS Safari to play inline rather than fullscreen
          className="creators-background-video" // CSS class for styling the video
          poster="/img/editing-poster.jpg"
        >
          <source src="/img/editing.mp4" type="video/mp4" />
        </video>
        <div className="creators-video-overlay">
          <div className="row">
            <div className="col-md-12 intro-text">
              <h1>Put an end to</h1>
              <h1>
                <span className="highlight"> unclear</span> partnerships,{" "}
              </h1>
              <h1>
                <span className="highlight"> unfair</span> compensation, and
              </h1>
              <h1>
                <span className="highlight">lack</span> of creative control
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
