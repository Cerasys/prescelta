// TestimonialsPage.jsx
import React, { useRef, useEffect, useState } from "react";
import "./testimonials.css"; // Ensure your CSS file is imported

// Define the testimonials data outside the component if it's static
// or inside if it truly needs to be within the component's scope (less common for static data)
const testimonials = [
  {
    quote:
      "The value add is really good. There are programs out there that kind of do false advertising— like once you get into it you realize it's not what you paid for. And it becomes this program you paid for but you don't get the results. But I'm already seeing results and that comes from Nathan's expertise and how well he supports my work.",
    name: "Nitish M",
    title: "Mental Health",
    image: "/img/testimonials/nitish.jpg",
  },
  {
    quote:
      "Nathan, I wish I had met you 20 years ago! Consulting with Nathan helped clarify the most strategic options for me! He was very patient, intentional and knowledgeable. He took the time to listen about my business, and he put in the work to generate solutions. I heartily recommend his help to others!",
    name: "Pretti Shah", // Replace with actual name
    title: "Women's Health", // Replace with actual title
    image: "/img/testimonials/pretti.jpg",
  },
  {
    quote:
      "I am so grateful to have found Nathan who helped me realize there are ways to gain freedom and they are so readily accessible. I am now less burned out and more passionate about my work than I've ever been before. This is the best thing that has ever happened to me.",
    name: "Jessica W", // Replace with actual name
    title: "Japan Travel", // Replace with actual title
    image: "/img/testimonials/jessica.jpg",
  },
  {
    quote:
      "Nathan has a really strong business and tech background. He was able to communicate things in ways that I could easily understand and was never taught about in school. He has a really strong digital marketing foundation, and that was the most helpful lesson I learned to run my business.",
    name: "Linh T", // Replace with actual name
    title: "Parenting", // Replace with actual title
    image: "/img/testimonials/linh.jpg",
  },
  {
    quote:
      "Nathan's guidance was transformative for my business. His insights into digital marketing are unparalleled, and he genuinely cares about his clients' success. Highly recommend!",
    name: "Isaiah M.",
    title: "Bi-racial Couples",
    image: "/img/testimonials/isaiah.jpg",
  },
  {
    quote:
      "I was struggling with my online presence, but Nathan provided a clear roadmap and the tools I needed to thrive. My engagement has skyrocketed!",
    name: "Cindy A.",
    title: "Beauty and Spirituality",
    image: "/img/testimonials/anon.png",
  },
];

// This is your TestimonialsSection component, now serving as the full page
const TestimonialsPage = () => {
  const scrollRef = useRef(null); // Ref to the scrollable div
  const scrollIntervalRef = useRef(null); // Ref to hold the interval ID
  const [isMobile, setIsMobile] = useState(false); // State to track mobile status

  // Function to check if it's a mobile device based on your CSS breakpoint
  const checkIsMobile = () => {
    return window.matchMedia("(max-width: 1023px)").matches;
  };

  useEffect(() => {
    setIsMobile(checkIsMobile()); // Set initial mobile status

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

    // Only enable auto-scrolling on mobile
    if (!scrollContainer || !isMobile) {
      clearInterval(scrollIntervalRef.current); // Clear any existing interval
      return;
    }

    const scrollStep = 1; // Pixels to scroll per interval
    const scrollSpeed = 50; // Milliseconds per step (lower = faster)
    const pauseAtEndDuration = 2000; // Milliseconds to pause at the end before looping

    const startScrolling = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          // Reached the end, reset to start after a pause
          clearInterval(scrollIntervalRef.current);
          setTimeout(() => {
            scrollContainer.scrollLeft = 0; // Jump to the beginning
            startScrolling(); // Restart scrolling
          }, pauseAtEndDuration);
        } else {
          scrollContainer.scrollLeft += scrollStep;
        }
      }, scrollSpeed);
    };

    // Pause scrolling when user interacts (hover/touch)
    const handleMouseEnter = () => clearInterval(scrollIntervalRef.current);
    const handleMouseLeave = () => startScrolling();
    const handleTouchStart = () => clearInterval(scrollIntervalRef.current);

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    scrollContainer.addEventListener("touchstart", handleTouchStart);

    startScrolling(); // Initial start

    // Cleanup: Clear the interval when the component unmounts or isMobile changes to false
    return () => {
      clearInterval(scrollIntervalRef.current);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
    };
  }, [isMobile]); // Re-run effect if mobile status or number of testimonials changes

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">What Our Clients Say</h2>
        <p className="testimonials-subheading">
          Hear directly from the creators and entrepreneurs Nathan has helped.
        </p>

        {/* Horizontal scroll container */}
        <div className="testimonials-scroll-wrapper" ref={scrollRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {testimonial.image && (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
              )}
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonial-meta">
                <p className="testimonial-name">- {testimonial.name}</p>
                {testimonial.title && (
                  <p className="testimonial-title">{testimonial.title}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage; // Export the new page component
