import React from "react";

export const Hero = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h4>Clothing Brands...</h4>
                <h1>
                  DO YOU WANT TO BE{" "}
                  <span className="highlight">A BRAND PEOPLE REMEMBER?</span>
                  <span></span>
                </h1>
                <br />
                <br />
                <p>
                  We generate hungry customers that want to part of your brand
                  and your story with our one-click system.
                </p>
                <a
                  href="https://go.hoshinomedia.com/book-call"
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
