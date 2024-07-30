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
    <React.Fragment>
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth, height }}
      ></div>
    </React.Fragment>
  );
};
