import React from "react";

export const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                <b>Formal education has failed therapists.</b>
                <br />
                It's charged you an arm (and maybe a leg!) to teach you how to
                be a therapist, but utterly failed to teach you how to own and
                operate your own business.
              </p>
              <p>
                Well we want to change that. During our 6 week therapist
                bootcamp, we'll teach you everything you need to know to run
                your practice without worrying about money ever again, forever.
              </p>
              <p>
                That way, you're freed up to do what you do best -{" "}
                <b>helping people</b>.
              </p>
              <h3>The Things We'll Do Together</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>
                      Learn the 3 ways you'll <b>ever</b> grow your business
                    </li>
                    <li>
                      Square your digital marketing to fill your practice in{" "}
                      <u>two months (guaranteed!)</u>
                    </li>
                    <li>
                      Don't have a website? We'll build and optimize one for you
                    </li>
                    <li>
                      Learn how to give your prospective client the best
                      experience by creating early wins
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>
                      Learn why your clients leave you early-and how to fix it.
                    </li>
                    <li>
                      Build long term marketing strategies to keep your practice
                      full (never worry about clients again!)
                    </li>
                    <li>
                      Learn how to save minimum $5000 in taxes a year, every
                      year 😲
                    </li>
                    <li>
                      Personalized coaching to grow your strengths and fill any
                      gaps
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
