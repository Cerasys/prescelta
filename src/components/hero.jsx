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
                  DO YOU WANT TO BUILD{" "}
                  <span className="highlight"> A BRAND</span> THAT THE WORLD{" "}
                  <span className="highlight"> REMEMBERS?</span>
                  <span></span>
                </h1>
                <br />
                <br />
                <p>
                  We help tell the story of your brand to hungry customers with
                  our one-click system.
                </p>
                <a
                  href="https://apply.hoshinomedia.com/apply"
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
