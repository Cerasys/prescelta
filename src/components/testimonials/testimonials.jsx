import React from "react";
import "./testimonials.css"; // Import the CSS file

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "The value add is really good. There are programs out there that kind of do false advertising— like once you get into it you realize it's not what you paid for. And it becomes this program you paid for but you don't get the results. But I'm already seeing results and that comes from Nathan's expertise and how well he supports my work.",
      name: "Nitish M",
      title: "Mental Health",
      //  image: "",
    },
    {
      quote:
        "Nathan, I wish I had met you 20 years ago! Consulting with Nathan helped clarify the most strategic options for my marketing. He was very patient, intentional and knowledgeable. He took the time to listen about my business, and he put in the work to generate solutions. I heartily recommend his help to others!",
      name: "Pretti Shah", // Replace with actual name
      title: "Women's Health", // Replace with actual title
      // image: "/images/alex-johnson.jpg",
    },
    {
      quote:
        "I am so grateful to have found Nathan who helped me realize there are ways to gain freedom and they are so readily accessible. I am now less burned out and more passionate about my work than I've ever been before. This is the best thing that has ever happened to me.",
      name: "Jessica W", // Replace with actual name
      title: "Japan Travel", // Replace with actual title
      // image: "/images/alex-johnson.jpg",
    },
    {
      quote:
        "Nathan has a really strong business and tech background. He was able to communicate things in ways that I could easily understand and was never taught about in school. He has a really strong digital marketing foundation, and that was the most helpful lesson I learned to run my business during the program.",
      name: "Linh T", // Replace with actual name
      title: "Parenting", // Replace with actual title
      //image: "/images/alex-johnson.jpg",
    },
    {
      quote:
        "Nathan's guidance was transformative for my business. His insights into digital marketing are unparalleled, and he genuinely cares about his clients' success. Highly recommend!",
      name: "Isaiah M.",
      title: "Bi-racial Couples",
      // image: "/images/alex-johnson.jpg",
    },
    {
      quote:
        "I was struggling with my online presence, but Nathan provided a clear roadmap and the tools I needed to thrive. My engagement has skyrocketed!",
      name: "Cindy A.",
      title: "Beauty and Spirituality",
      // image: "/images/alex-johnson.jpg",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">What Our Clients Say</h2>
        <p className="testimonials-subheading">
          Hear directly from the creators and entrepreneurs Nathan has helped.
        </p>

        {/* Horizontal scroll container */}
        <div className="testimonials-scroll-wrapper">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {testimonial.image && ( // Conditionally render image if available
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-avatar" // New class for styling the image
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

export default TestimonialsSection;
