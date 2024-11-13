import React from "react";

const OnboardingStep = ({
  header,
  vimeoUrl,
  description,
  buttonText,
  buttonLink,
  extraButtonText,
  extraButtonLink,
}) => {
  // Split the description by newlines and create paragraphs
  const formattedDescription = description
    .split("\n")
    .map((line, index) => <p key={index}>{line}</p>);

  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        backgroundImage: "url('/img/whiteGeo.jpg')", // Background image applied here
        backgroundSize: "cover", // Make sure the background image covers the whole container
        backgroundPosition: "center", // Ensure the image is centered
        backgroundRepeat: "no-repeat", // Prevent image from repeating
        backgroundAttachment: "fixed", // This ensures the image stays fixed and doesn't scroll
        minHeight: "100%", // Ensure the container takes the full viewport height
        minWidth: "100vw", // Ensure the container takes the full viewport height
      }}
    >
      <h1>{header}</h1>

      {/* Embedded Vimeo video */}
      <div style={{ margin: "20px 0" }}>
        <iframe
          src={vimeoUrl}
          width="100%"
          height="450"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Onboarding Video"
        ></iframe>
      </div>

      {/* Horizontal line */}
      <hr style={{ border: "2px solid black", margin: "20px 0" }} />

      {/* Render the description with line breaks */}
      <div>{formattedDescription}</div>

      {/* Horizontal line */}
      <hr style={{ border: "2px solid black", margin: "20px 0" }} />

      {/* Conditionally rendered extra button */}
      {extraButtonText && extraButtonLink && (
        <a
          href={extraButtonLink}
          style={{
            display: "inline-block",
            backgroundColor: "#6c757d",
            color: "white",
            textDecoration: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            marginBottom: "10px", // Add space between the buttons
          }}
        >
          {extraButtonText}
        </a>
      )}

      {/* Main button */}
      <a
        href={buttonLink}
        style={{
          display: "inline-block",
          backgroundColor: "#007BFF",
          color: "white",
          textDecoration: "none",
          padding: "10px 20px",
          cursor: "pointer",
          fontSize: "24px",
          fontWeight: "600",
          border: "2px solid #ADD8E6", // Light blue border
        }}
      >
        {buttonText}
      </a>
    </div>
  );
};

export default OnboardingStep;
