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
          <div key={`nm`} className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                {/* <img src="/img/testimonials/07.jpg" alt="headshot of N M." /> */}
              </div>
              <div className="testimonial-content">
                <p>
                  The value add is <b>really</b> good. There are programs out
                  there that kind of do false advertising— like once you get
                  into it you realize it's not what you paid for. And it becomes
                  this program you paid for but you don't get the results.
                </p>
                <p>
                  <b>
                    But I'm already seeing results and that comes from Nathan's
                    expertise and how well he supports my work.
                  </b>
                </p>
              </div>
            </div>
          </div>

          <div key={`preetishah`} className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                {/* <img src="/img/testimonials/08.jpg" alt="headshot of PS" /> */}
              </div>
              <div className="testimonial-content">
                <p>
                  <b>"Nathan, I wish I had met you 20 years ago!"</b>
                </p>
              </div>
            </div>
          </div>
          <div key={`lmk`} className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                {/* <img src="/img/testimonials/09.jpg" alt="headshot of LM" /> */}
              </div>
              <div className="testimonial-content">
                <p>
                  Consulting with Nathan helped clarify the most strategic
                  options for my marketing.
                  <br />
                  He was very patient, intentional and knowledgeable. He took
                  the time to listen about my business, and he put in the work
                  to generate solutions.{" "}
                </p>
                <p>
                  <b> I heartily recommend his help to others!</b>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div key={`jw`} className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                {/* <img src="/img/testimonials/10.jpg" alt="headshot of JW" /> */}
              </div>
              <div className="testimonial-content">
                <p>
                  "I am so grateful to have found Nathan who helped me realize
                  there are ways to gain freedom and they are so readily
                  accessible.
                </p>
                <p>
                  I am now less burned out and more passionate about my work
                  than I've ever been before.{" "}
                </p>
                <p>
                  <b>This is the best thing that has ever happened to me</b>
                  ."
                </p>
              </div>
            </div>
          </div>
          <div key={`lt`} className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                {/* <img src="/img/testimonials/11.jpg" alt="headshot of L T" /> */}
              </div>
              <div className="testimonial-content">
                <p>
                  Nathan has a really strong business and tech background. He
                  was able to communicate things in ways that I could easily
                  understand and was never taught about in school.
                </p>
                <p>
                  {" "}
                  He has a really strong digital marketing foundation, and
                  <b>
                    {" "}
                    that was the most helpful lesson I learned to run my
                    business during the program.
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="section-title text-center">
          <h2>Some stats</h2>
        </div>
        <div className="row">
          <div key={`gad1`} className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-stats">
                <img src="/img/stats/01.png" alt="headshot of L T" />
              </div>
            </div>
          </div>
          <div key={`space`} className="col-md-4"></div>
          <div key={`gad2`} className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-stats">
                <img src="/img/stats/02.png" alt="headshot of L T" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
