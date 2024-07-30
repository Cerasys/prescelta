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
                Covid is over, and Real Estate Investing has changed forever.{" "}
                <br />
                Unfortunately for most investors, houses are no longer on
                firesale and there's a LOT more competition. Your REI business
                won't survive (let alone scale!) without a way to consistently
                get you deals that other investors aren't seeing.
              </p>
              <p>
                {" "}
                I'm Nathan, a third-generation real estate investor. I did deals
                all across Washington before realizing that I SUCKED at getting
                leads. So I set about to fix that.{" "}
              </p>
              <p>
                I now specialize in tapping YouTube, Google, and Facebook to
                bring go-getters just like you motivated seller leads. <br />{" "}
                <b>
                  We're getting leads for anywhere from $20-150, and they're
                  HIGH QUALITY AS HECK
                </b>
                .
              </p>
              <p>
                {" "}
                And me and my team want to partner with you to bring you more
                deals and experience more freedom in your life.
              </p>
              <p>
                <b>So stop paying $1000s for leads.</b>
                <br />
                <b>
                  Stop waiting for wholesalers to drip feed you your freedom.
                </b>
                <br />
                <b>Get consistent leads to sustainably scale your business</b>
                <br />
              </p>
              <h3>
                So if you want to build a consistent deal acquisition pipeline
                and experience true freedom in real estate investing...
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
