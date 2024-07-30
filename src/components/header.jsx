import React from "react";

export const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h4>Real Estate Investors...</h4>
                <h1>
                  DO YOU WANT MORE MOTIVATED SELLERS?
                  <span></span>
                </h1>
                <br />
                <br />
                <p>
                  Book a call to learn how we can help your do more deals,
                  hassle-free.
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
