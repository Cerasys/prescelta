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
                <b>
                  We'll bring you more coaching clients without you needing to
                  be famous or having to dance on tiktok daily.{" "}
                </b>
                <br />
                Covid has changed our world FOREVER. <br />
                People are waking up to the reality that the "salaryman life" is
                a lie spun by big corporation to keep them from living life to
                the fullest. <br />
                It's a gold rush of hungry people trying to discover what life
                could hold. And in the gold rush, the best thing to do was not
                to pan for gold, but to sell shovels.
                <br />
              </p>
              <p>
                I'm Nathan, your <b>growth architect and marketing wizard</b>.
                Me and my partner have
                <u>
                  {" "}
                  spent over 6 figures in ads, sent 600,000 texts, sent over 1
                  MILLION emails
                </u>
                , and I'm here to help you next.
              </p>
              <p>
                I now specialize in paid ads for getting your knowledge-hungry
                coaching clients.{" "}
                <b>
                  My team has built a revolutionary funnel that has decreased
                  lead costs by more than 5x for high paying, hungry clients.
                </b>
                <br />
              </p>
              <p>
                And me and my team want to partner with you to bring you more
                sales and experience more freedom in your life.
              </p>
              <p>
                <b>
                  So stop paying posting on TikTok and Instagram praying that
                  you'll go viral.
                </b>
                <br />
                <b>
                  Stop paying for TubeBuddy and scraping keywords to match
                  against to show on people's YouTube feeds.
                </b>
                <br />
                <b>
                  Stop trying to publish a book trying to build credibility and
                  to get in front of people.
                </b>
                <br />
                <b>
                  Let us develop an automated, scalable way to achieve your
                  business goals for you
                </b>
                <br />
              </p>
              <h3>
                So if you want an automated customer acquisition way to make
                your dreams come true...
              </h3>
              <a
                href="https://calendly.com/nathanblee/growth-blueprint-call"
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
