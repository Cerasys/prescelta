import React from "react";

export const Hero = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h4>influencer marketing ...</h4>
                <h1>
                  Where <span className="highlight"> Integrity</span> Meets
                  <span className="highlight"> Storytelling</span>
                </h1>
                <br />
                <br />
                <p>
                  We connect high-integrity creators with brands that value
                  depth, curiosity, and storytelling
                </p>
                <a
                  href="https://apply.hoshinomedia.com/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  I'm a Creator, Show me How!
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
