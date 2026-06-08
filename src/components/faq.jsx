import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./faq.css";
import { BOOKING_LINK } from "../data/constants";

// Premium Accordion item styling
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-glass-card ${isOpen ? "active" : ""}`}>
      <button
        className="faq-accordion-title"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Style locked inline to bypass global typography contamination */}
        <h3
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#ffffff",
            margin: 0,
            textAlign: "left",
            lineHeight: "1.4",
          }}
        >
          {title}
        </h3>
        <span className={`faq-accordion-icon ${isOpen ? "open" : ""}`}>
          &#9660;
        </span>
      </button>
      <div className={`faq-accordion-content ${isOpen ? "open" : ""}`}>
        <div className="faq-markdown-wrapper">
          <ReactMarkdown remarkPlugins={[remarkGfm]} breaks={true}>
            {content}
          </ReactMarkdown>
        </div>
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

  const parseFaqMarkdown = (markdown) => {
    const questions = [];
    const lines = markdown.split("\n");
    let currentQuestion = null;
    let currentAnswerLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith("### ")) {
        if (currentQuestion && currentAnswerLines.length > 0) {
          questions.push({
            question: currentQuestion,
            answer: currentAnswerLines.join("\n"),
          });
        }
        currentQuestion = trimmedLine.substring(4).trim();
        currentAnswerLines = [];
      } else if (trimmedLine === "---") {
        if (currentQuestion && currentAnswerLines.length > 0) {
          questions.push({
            question: currentQuestion,
            answer: currentAnswerLines.join("\n"),
          });
        }
        currentQuestion = null;
        currentAnswerLines = [];
      } else if (
        currentQuestion !== null &&
        trimmedLine !== "" &&
        !trimmedLine.startsWith("# ")
      ) {
        currentAnswerLines.push(line);
      } else if (currentQuestion !== null && trimmedLine === "") {
        currentAnswerLines.push(line);
      }
    }

    if (currentQuestion && currentAnswerLines.length > 0) {
      questions.push({
        question: currentQuestion,
        answer: currentAnswerLines.join("\n"),
      });
    }
    return questions;
  };

  if (loading) {
    return (
      <div className="faq-hub-wrapper">
        <div className="faq-hub-container">
          <p className="faq-status-text">Loading insights...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="faq-hub-wrapper">
        <div className="faq-hub-container">
          <p className="faq-status-text" style={{ color: "#ef4444" }}>
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="faq-hub-wrapper">
      <div className="faq-hub-container">
        {/* Header Layout Section */}
        <div className="faq-header-block">
          <h1 className="faq-main-title">Frequently Asked Questions</h1>
          <p className="faq-main-subtitle">
            Everything you need to know about our growth frameworks and scaling
            pipelines.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="faq-accordions-stack">
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              title={item.question}
              content={item.answer}
            />
          ))}
        </div>

        {/* Centered Bottom Conversion Anchor Block */}
        <div className="faq-footer-callout">
          <div className="faq-glow-effect" />
          <div className="faq-callout-inner">
            <h3
              style={{
                fontSize: "2.8rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "16px",
                letterSpacing: "-0.03em",
              }}
            >
              Want to learn more about how we can make your brand connect with
              people?
            </h3>
            <div className="faq-btn-center-wrap">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="faq-submit-btn"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
