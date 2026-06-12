import React, { useEffect } from "react";
import "./instagramFunnel.css";

const InstagramFunnel = ({
  title,
  videoEmbedUrl,
  downloadUrl,
  downloadButtonText = "Download the PDF Blueprint",
}) => {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) document.title = title;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  return (
    <div className="ig-funnel-wrapper">
      <div className="ig-funnel-container">
        {/* Title Heading */}
        {title && <h1 className="ig-title">{title}</h1>}

        {/* Video Player */}
        {videoEmbedUrl && (
          <div className="ig-video-card">
            <div className="ig-video-wrapper-inner">
              <iframe
                src={videoEmbedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="ig-video-iframe"
              ></iframe>
            </div>
          </div>
        )}

        {/* Direct New-Tab Link */}
        {downloadUrl && (
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-download-btn"
          >
            <svg
              className="ig-download-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            {downloadButtonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default InstagramFunnel;
