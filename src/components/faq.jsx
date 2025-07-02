import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown"; // Import ReactMarkdown
import remarkGfm from "remark-gfm";
import "./faq.css";

// Accordion component for each FAQ item
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>
          &#9660;
        </span>
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <ReactMarkdown
          // Add remarkGfm to the plugins array
          remarkPlugins={[remarkGfm]}
          breaks={true}
          // OPTION A: Forcing <br /> with two spaces (CommonMark compliant with remark-gfm)
          // Ensure this is NOT present if you strictly want two spaces for <br/>
          // breaks={false} // Or remove this prop entirely, as default is false for CommonMark
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const response = await fetch("/content/faq.md");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdownText = await response.text();
        const parsedData = parseFaqMarkdown(markdownText);
        setFaqData(parsedData);
      } catch (e) {
        setError("Failed to load FAQ content.");
        console.error("Error fetching FAQ markdown:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchFaq();
  }, []);

  // Function to parse the markdown and extract questions and answers
  const parseFaqMarkdown = (markdown) => {
    const questions = [];
    const lines = markdown.split("\n");
    let currentQuestion = null;
    let currentAnswerLines = [];

    for (let i = 0; i < lines.length; i++) {
      // Keep the original line content including leading/trailing spaces for Markdown parsing
      const line = lines[i];

      // Check for the question start or separator, trimming only for these checks
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith("### ")) {
        // This is a new question
        if (currentQuestion && currentAnswerLines.length > 0) {
          questions.push({
            question: currentQuestion,
            // Join the raw lines, ReactMarkdown will handle the trimming and parsing
            answer: currentAnswerLines.join("\n"),
          });
        }
        currentQuestion = trimmedLine.substring(4).trim(); // Trim question title
        currentAnswerLines = [];
      } else if (trimmedLine === "---") {
        // Separator between questions
        if (currentQuestion && currentAnswerLines.length > 0) {
          questions.push({
            question: currentQuestion,
            // Join the raw lines
            answer: currentAnswerLines.join("\n"),
          });
        }
        currentQuestion = null;
        currentAnswerLines = [];
      } else if (
        currentQuestion !== null &&
        trimmedLine !== "" && // Check trimmed line for emptiness to avoid blank lines
        !trimmedLine.startsWith("# ") // Check trimmed line for other headings
      ) {
        // Add lines to the current answer. Include lines that are just whitespace for proper Markdown rendering.
        currentAnswerLines.push(line);
      } else if (currentQuestion !== null && trimmedLine === "") {
        // Special case: If it's an empty line *within* an answer block, we still want to include it.
        // This is crucial for paragraph breaks (two newlines) in Markdown.
        currentAnswerLines.push(line);
      }
    }

    // Add the last question if it exists
    if (currentQuestion && currentAnswerLines.length > 0) {
      questions.push({
        question: currentQuestion,
        // Join the raw lines
        answer: currentAnswerLines.join("\n"),
      });
    }
    return questions;
  };

  if (loading) {
    return (
      <div id="faq" className="faq container">
        Loading FAQ...
      </div>
    );
  }

  if (error) {
    return (
      <div id="faq" className="faq container" style={{ color: "red" }}>
        {error}
      </div>
    );
  }

  return (
    <div id="faq">
      <div className="faq container">
        <div className="row">
          <div className="about-text">
            <h2>Frequently Asked Questions</h2>
            <hr /> {/* Add a horizontal rule for better separation */}
            <div className="faq-accordions">
              {faqData.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.question}
                  content={item.answer}
                />
              ))}
            </div>
            <br />
          </div>
          <div className="btn-container">
            <a
              href="https://calendly.com/nathanblee/hoshino-media-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-custom shimmer-effect btn-lg page-scroll"
            >
              Book a Call
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
