import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h4>Private practice therapists</h4>
                <h1>
                  DO YOU WANT MORE CLIENTS?
                  <span></span>
                </h1>
                <br />
                <br />
                <p>
                  Book a call to learn how we can help fill your practice, teach
                  you how to keep it full, and do it all hassle-free.
                </p>
                <Link
                  to="/contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Yes, Show me How!
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
