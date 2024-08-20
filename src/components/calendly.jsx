import React, { useEffect } from "react";

export const Calendly = ({ minWidth, height, url }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="buffer">
            <div
              className="calendly-inline-widget"
              data-url={url}
              style={{ minWidth, height }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};
