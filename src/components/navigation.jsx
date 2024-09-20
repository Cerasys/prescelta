import React from "react";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link className="navbar-brand page-scroll" to="/#page-top">
            <span className="logo">500 Flips</span>
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/#testimonials" className="page-scroll">
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="https://nathanblee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="page-scroll"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/book"
                target="_blank"
                rel="noopener noreferrer"
                className="page-scroll"
              >
                Book a Call
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="page-scroll"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
