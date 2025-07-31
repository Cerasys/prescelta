import React from "react";
import "./info.css";

export const Info = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="social">
            <ul>
              {
                <li>
                  <a
                    href={props.data ? props.data.facebook : "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                /* <li>
                  <a
                    href={props.data ? props.data.youtube : "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={props.data ? props.data.instagram : "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li> */
              }
              <li>
                <a
                  href={props.data ? props.data.linkedin : "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href={props.data ? props.data.email : "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-envelope-o"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
