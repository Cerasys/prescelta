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
          <Link className="navbar-brand page-scroll logo" to="/#page-top">
            <img
              src="img/logo_juicy.png"
              alt="Juicy Logo"
              style={{ maxWidth: "80px" }}
            />
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              {/* <Link to="/#testimonials" className="page-scroll">
                Testimonials
              </Link> */}
            </li>
            <li>
              <Link
                to="/#about"
                target="_blank"
                rel="noopener noreferrer"
                className="page-scroll"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/book"
                target="_blank"
                rel="noopener noreferrer"
                className="page-scroll"
              >
                Apply as a brand
              </Link>
            </li>
            <li>
              <Link
                to="https://apply.hoshinomedia.com/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="page-scroll"
              >
                Apply as a creator
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
