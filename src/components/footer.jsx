import React from "react";

export const Footer = () => {
  return (
    <div id="footer">
      <div className="container text-center">
        <p>
          &copy; 2025 Prescelta LLC DBA Hoshino Media |{" "}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" target="_blank" rel="noopener noreferrer">
            Terms and Conditions{" "}
          </a>
        </p>
      </div>
    </div>
  );
};
