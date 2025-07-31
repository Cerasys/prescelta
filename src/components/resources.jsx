import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown"; // Import ReactMarkdown
import remarkGfm from "remark-gfm"; // Import remarkGfm for GitHub Flavored Markdown
import "./resources.css";

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
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return (
      <div id="resources">
        <div className="resources container">
          <p>Loading resources...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="resources">
        <div className="resources container">
          <p style={{ color: "red" }}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div id="resources">
      <div className="resources container">
        {" "}
        {/* Reusing 'resources container' class for consistency */}
        <div className="row">
          <div className="resources-text">
            {/* Removed the extra <br/> here; ReactMarkdown will handle spacing */}
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdownContent}
            </ReactMarkdown>
            <br />{" "}
            {/* Keep this if you want a visual break before the button */}
          </div>
          <div className="marketing-header">
            <h3>
              Want to learn how to take your influencer marketing even further?
            </h3>
          </div>
          <div className="btn-container">
            <a
              href="https://calendly.com/nathanblee/hoshino-media-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-custom shimmer-effect btn-lg page-scroll"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
