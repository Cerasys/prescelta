import React from "react";

export const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src="img/team/nathan.jpg"
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About The Founder</h2>
              <p>
                Finding jobs has changed FOREVER. <br />
                There is an all-time high for cleaners entering the market.{" "}
                <br />
                Word of mouth alone won't help you scale <br />
                Without a reliable system to consistently bring you high-value
                clients that your competitors are missing, you're leaving money
                on the table.
              </p>
              <p>
                I'm Nathan, your <b>marketing wizard</b>. Me and my partner have
                <u>
                  {" "}
                  spent over 6 figures in ads, sent 600,000 texts, sent over 1
                  MILLION emails
                </u>
                , and I'm here to help you next.
              </p>
              <p>
                I now specialize in lead generation for getting people
                appointments (not just sales calls) with local businesses.
                leaning businesses like yours stand out, book more clients, and
                scale faster than ever before. Let us bring you the leads while
                you focus on what you do best—delivering spotless service.{" "}
                <br />{" "}
                <b>
                  The best part? You don't pay me in advanced, we partner
                  together and you pay me on commission.
                </b>
                .
              </p>
              <p>
                {" "}
                And me and my team want to partner with you to bring you more
                appointments and experience more freedom in your life.
              </p>
              <p>
                <b>So stop paying $100s for angieleads.</b>
                <br />
                <b>
                  Stop waiting for other business owners to drip feed you your
                  freedom.
                </b>
                <br />
                <b>Get consistent leads to sustainably scale your business</b>
                <br />
              </p>
              <h3>
                So if you want to build a consistent deal acquisition pipeline
                and experience true freedom in business...
              </h3>
              <a
                href="/book"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-custom btn-lg page-scroll"
              >
                Book a Call Now
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
