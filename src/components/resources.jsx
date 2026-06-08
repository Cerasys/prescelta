import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./resources.css";
import { BOOKING_LINK } from "../data/constants";

export const Resources = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch("/content/resources.md");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        setMarkdownContent(text);
      } catch (e) {
        setError("Failed to load resources content.");
        console.error("Error fetching resources markdown:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) {
    return (
      <div className="res-hub-wrapper">
        <div className="res-hub-container">
          <p className="res-loading-text">Loading resources...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="res-hub-wrapper">
        <div className="res-hub-container">
          <p className="res-error-text">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="res-hub-wrapper">
      <div className="res-hub-container">
        {/* Main Content & Markdown Area */}
        <div className="res-content-layout">
          <div className="res-markdown-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdownContent}
            </ReactMarkdown>
          </div>

          {/* Highlight Callout Block mirroring Lead Magnet styling */}
          <div className="res-glass-callout">
            <div className="res-glow-effect" />
            <div className="res-callout-inner">
              <h3 className="res-callout-title">
                Want to learn how to take your brand even further?
              </h3>
              <p className="res-callout-desc">
                Let's construct a bespoke acquisition funnel designed
                specifically for your scaling requirements.
              </p>
              <div className="res-btn-container">
                <a
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="res-submit-btn"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
