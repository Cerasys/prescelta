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
        <div className="klaviyo-badge-wrapper">
          <a
            href="https://connect.klaviyo.com/preview/partner/hoshino-media/89029f2c-44de-42a2-a83b-ee8355c37aff"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/K_Partners_Bronze/KPartner-BadgeTier-Charcoal-Bronze.png"
              alt="Klaviyo SBronze Partner"
              className="klaviyo-badge"
            />
          </a>
        </div>

        <p>
          &copy; 2025 Prescelta LLC DBA Hoshino Media |{" "}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" target="_blank" rel="noopener noreferrer">
            Terms and Conditions
          </a>{" "}
          | Based in Seattle with 💖
        </p>
      </div>
    </div>
  );
};
