// TestimonialsPage.jsx
import React, { useRef, useEffect, useState } from "react";
import "./testimonials.css";
import { BOOKING_LINK } from "../../data/constants";

const testimonials = [
  {
    quote:
      "There is no one else I really get to have such in-depth conversations with about business. It's completely different when you work side-by-side with someone and you're building something together. I deeply appreciate your direction, your opinions, and how you perceive what we are building. Having your expertise is very valuable.",
    name: "Nick R.",
    title: "Founder, Obsidian Forged",
    image: "/img/results/obsidian.png",
  },
  {
    quote:
      "I am so grateful to have found Nathan who helped me realize there are ways to gain freedom and they are so readily accessible. I am now less burned out and more passionate about my work than I've ever been before. This is the best thing that has ever happened to me.",
    name: "Jessica W",
    image: "/img/testimonials/jessica.jpg",
  },
  {
    quote:
      "Nathan is extremely knowledgable and has helped us identify exactly what we needed to improve.",
    name: "Jennifer A.",
    title: "Founder, Jimani Collections",
    image: "/img/results/jimani.jpg",
  },
  {
    quote:
      "The value add is really good. There are programs out there that kind of do false advertising— like once you get into it you realize it's not what you paid for. And it becomes this program you paid for but you don't get the results. But I'm already seeing results and that comes from Nathan's expertise and how well he supports my work.",
    name: "Nitish M",
    image: "/img/testimonials/nitish.jpg",
  },
  {
    quote:
      "Nathan, I wish I had met you 20 years ago! Consulting with Nathan helped clarify the most strategic options for me! He was very patient, intentional and knowledgeable. He took the time to listen about my business, and he put in the work to generate solutions. I heartily recommend his help to others!",
    name: "Pretti Shah",
    image: "/img/testimonials/pretti.jpg",
  },
  {
    quote:
      "Nathan's guidance was transformative for my business. His insights into digital marketing are unparalleled, and he genuinely cares about his clients' success. Highly recommend!",
    name: "Isaiah M.",
    image: "/img/testimonials/isaiah.jpg",
  },
];

const caseStudies = [
  {
    id: 1,
    title:
      "450% Revenue Scale: Deploying High-Margin Offers & Ad Architecture for Premium E-Commerce",
    image: "/img/results/results1.png",
  },
  {
    id: 2,
    title:
      "Lead-Gen Architecture: Reducing Customer Acquisition Costs & Automating Retention Infrastructures",
    image: "/img/results/lead results.png",
  },
];

const TestimonialsPage = () => {
  const scrollRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const checkIsMobile = () => {
    return window.matchMedia("(max-width: 1023px)").matches;
  };

  useEffect(() => {
    setIsMobile(checkIsMobile());

    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer || !isMobile) {
      clearInterval(scrollIntervalRef.current);
      return;
    }

    const scrollStep = 1;
    const scrollSpeed = 50;
    const pauseAtEndDuration = 2000;

    const startScrolling = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          clearInterval(scrollIntervalRef.current);
          setTimeout(() => {
            scrollContainer.scrollLeft = 0;
            startScrolling();
          }, pauseAtEndDuration);
        } else {
          scrollContainer.scrollLeft += scrollStep;
        }
      }, scrollSpeed);
    };

    const handleMouseEnter = () => clearInterval(scrollIntervalRef.current);
    const handleMouseLeave = () => startScrolling();
    const handleTouchStart = () => clearInterval(scrollIntervalRef.current);

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    scrollContainer.addEventListener("touchstart", handleTouchStart);

    startScrolling();

    return () => {
      clearInterval(scrollIntervalRef.current);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
    };
  }, [isMobile]);

  return (
    <div className="res-hub-wrapper">
      {/* SEGMENT 1: RESULTS CARDS (Stays at the Top) */}
      <section className="res-section-block res-border-bottom">
        <div className="res-hub-container">
          <h2 className="res-main-title">Results</h2>
          <h4 className="res-main-subtitle">
            Before deploying revenue architecture for creators, our
            infrastructure were stress-tested in the most data-strict,
            high-security medical and ecommerce environments in the world.
          </h4>

          <div className="res-cards-grid">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="res-glass-card"
                onClick={() => setSelectedImg(study.image)}
              >
                <div className="res-media-frame">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="res-asset-img"
                  />
                  <div className="res-hover-lens">
                    <span className="res-lens-text">Click to Expand</span>
                  </div>
                </div>
                <h5 className="res-card-label">{study.title}</h5>
              </div>
            ))}
          </div>

          <h5 className="res-action-caption">
            <i>Click the images to see more.</i>
          </h5>
        </div>
      </section>

      {/* SEGMENT 2: SCROLLING TESTIMONIALS (Sits directly underneath Results) */}
      <section className="res-section-block">
        <div className="res-hub-container-marquee">
          <h2 className="res-main-title">What Our Clients Say</h2>
          <p className="res-main-paragraph">
            Before engineering systems exclusively for high-growth e-commerce
            brands, these exact data architectures and scale strategies were
            stress-tested in highly competitive, trust-reliant sectors like
            healthcare and mental health.
          </p>

          <div className="res-marquee-container">
            <div className="res-marquee-track">
              {/* Loop 1 */}
              {testimonials.map((testimonial, index) => (
                <div key={`loop1-${index}`} className="res-review-panel">
                  <div className="res-avatar-cluster">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="res-avatar-thumb"
                      />
                    )}
                  </div>
                  <blockquote className="res-review-quote">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="res-review-meta">
                    <p className="res-meta-name">- {testimonial.name}</p>
                    {testimonial.title && (
                      <p className="res-meta-tag">{testimonial.title}</p>
                    )}
                  </div>
                </div>
              ))}
              {/* Loop 2 */}
              {testimonials.map((testimonial, index) => (
                <div key={`loop2-${index}`} className="res-review-panel">
                  <div className="res-avatar-cluster">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="res-avatar-thumb"
                      />
                    )}
                  </div>
                  <blockquote className="res-review-quote">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="res-review-meta">
                    <p className="res-meta-name">- {testimonial.name}</p>
                    {testimonial.title && (
                      <p className="res-meta-tag">{testimonial.title}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Focus Modal */}
      {selectedImg && (
        <div
          className="res-portal-lightbox"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="res-portal-close"
            onClick={() => setSelectedImg(null)}
          >
            &times;
          </button>
          <img
            src={selectedImg}
            className="res-portal-focused-img"
            alt="Viewport"
          />
        </div>
      )}
      <div className="srv-footer-callout">
        <div className="srv-glow-effect" />
        <div className="srv-callout-inner">
          <h3
            style={{
              fontSize: "2.6rem",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to turn your views into a predictable enterprise?
          </h3>
          <div className="srv-btn-center-wrap">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="srv-submit-btn"
            >
              Book an operational audit!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
