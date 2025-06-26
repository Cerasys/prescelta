import React from "react";
import MarketingHighlights from "./marketingHighlights";

export const Creators = () => {
  return (
    <div className="body">
      <MarketingHighlights />
      <a
        href="https://calendly.com/hoshinomedia/discovery"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-custom btn-lg page-scroll"
      >
        I'm a Creator, Show me How!
      </a>{" "}
    </div>
  );
};
