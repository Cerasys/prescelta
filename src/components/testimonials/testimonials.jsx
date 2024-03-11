import React from "react";
import "./testimonials.css";

var testimonials = [
  {
    img: "img/testimonials/02.jpg",
    text: "Nathan and his team were incredibly knowledgable. They met me where I was at, and taught me things I hadn't known even after 30 years in private practice. The process was educational and affirming.",
    name: "Larry Mark",
    link: "https://www.psychologytoday.com/us/therapists/larry-mark-bellevue-wa/199594",
  },
];

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          <div key={`jessicaWong`} className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                <a href="https://www.psychologytoday.com/us/therapists/jessica-wong-life-healing-therapy-and-counseling-edmonds-wa/886387">
                  <img src="/img/testimonials/01.jpg" alt="Jessica Wong" />
                </a>{" "}
              </div>
              <div className="testimonial-content">
                <p>
                  "I thought that being in private practice meant you always
                  have to be taken advantage of by insurance and billing
                  services. I am so grateful to have found Nathan who helped me
                  realize there are ways to gain freedom and they are so readily
                  accessible.
                </p>
                <p>
                  I am now less burned out and more passionate about my work
                  than I've ever been before.{" "}
                </p>
                <p>
                  <b>
                    This is the best thing that has ever happened to me as a
                    private practice therapist
                  </b>
                  ."
                </p>
                <a href="https://www.psychologytoday.com/us/therapists/jessica-wong-life-healing-therapy-and-counseling-edmonds-wa/886387">
                  <div className="testimonial-meta"> - Jessica Wong </div>
                </a>
              </div>
            </div>
          </div>
          {testimonials
            ? testimonials.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <a href={d.link}>
                        <img src={d.img} alt="" />
                      </a>{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <a href={d.link}>
                        <div className="testimonial-meta"> - {d.name} </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
