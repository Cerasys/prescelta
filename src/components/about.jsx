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
                I now specialize in paid ads for getting customers to empty your
                entire online inventory. Let us bring you the sales while you
                focus on what you do best—delivering high quality service and
                designing awesome collections. <br />
              </p>
              <p>
                {" "}
                And me and my team want to partner with you to bring you more
                sales and experience more freedom in your life.
              </p>
              <p>
                <b>So stop paying posting on fashion megathreads.</b>
                <br />
                <b>
                  Stop discounting your clothes so low that you barely are
                  breaking even.
                </b>
                <br />
                <b>Get consistent profit to sustainably scale your business</b>
                <br />
              </p>
              <h3>
                So if you want to build a consistent customer acquisition
                pipeline and experience true freedom in business...
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
