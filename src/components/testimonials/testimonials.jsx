import React from "react";
import "./testimonials.css";

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
          <div key={`larrymark`} className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                <a href="https://www.psychologytoday.com/us/therapists/larry-mark-bellevue-wa/199594">
                  <img src="/img/testimonials/02.jpg" alt="Jessica Wong" />
                </a>{" "}
              </div>
              <div className="testimonial-content">
                <p>
                  Consulting with Nathan helped me to clarify the most strategic
                  options for my marketing situation.
                  <br />
                  He was very patient, intentional and knowledgeable about best
                  practices. I appreciated how he took the time to listen well
                  to me about my business, and he put in the work to generate
                  solutions. He was very prompt in his responses, kept his word
                  and took the effort to communicate well. Nathan was
                  encouraging, empathetic and professional!
                  <b>
                    I heartily recommend his help to other therapists in private
                    practice!
                  </b>
                </p>

                <a href="https://www.psychologytoday.com/us/therapists/larry-mark-bellevue-wa/199594">
                  <div className="testimonial-meta"> - Larry Mark </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
