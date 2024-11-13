import React from "react";

export const Hero = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h4>Brand Owners...</h4>
                <h1>
                  DO YOU WANT <span className="highlight">MORE SALES?</span>
                  <span></span>
                </h1>
                <br />
                <br />
                <p>
                  Use our one-click system that generates high quality
                  customers, on autopilot.
                </p>
                <a
                  href="/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Yes, Show me How!
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
