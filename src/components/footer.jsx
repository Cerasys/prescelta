import React, { useEffect, useState } from "react";
import { Info } from "./info";
import "./footer.css";
import JsonData from "../data/data.json";

export const Footer = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div id="footer">
      <Info data={landingPageData.Contact} />

      <div className="container text-center">
        <p>
          &copy; 2025 Prescelta LLC DBA Hoshino Media |{" "}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" target="_blank" rel="noopener noreferrer">
            Terms and Conditions
          </a>
        </p>
      </div>
    </div>
  );
};
