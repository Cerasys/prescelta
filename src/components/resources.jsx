import React from "react";
import "./faq.css";

export const Resources = () => {
  return (
    <div id="resources">
      <div className="faq container">
        <div className="row">
          <div className="about-text">
            <br />
            <h2>Creator Resources</h2>
            <h3>Invoice Generator</h3>
            <p>
              Need a good looking invoice template to send to a brand? Here's a
              quick and easy one. It allows you to set your currency, add line
              items, and download it directly to your computer.
            </p>
            <h4>
              <a
                href="https://invoice-generator.com/#/1"
                target="_blank"
                class="no-color"
                rel="noopener noreferrer"
              >
                <u>Try it out here.</u>{" "}
              </a>
            </h4>
            <br />
            <h3>CPM Calculator</h3>
            <p>
              Want to figure out your rates? Most companies calculate the rate
              they pay you based on your CPM (cost per 1000 impressions). <br />
              A typical CPM for creators is around $15-25 for US-based traffic,
              so if you're getting 50k views and 50% of your audience is from
              the US, your campaign cost might be $500.
            </p>
            <h4>
              <a
                href="https://marketingtools.clickz.com/cpm-calculator"
                target="_blank"
                rel="noopener noreferrer"
                class="no-color"
              >
                <u>Try it out here.</u>
              </a>
            </h4>
            <br />
            <h3>YouTube Growth Tools: TubeBuddy</h3>
            <p>
              TubeBuddy is a YouTube extention that allows creators to quickly
              analyze keywords and tags for their videos and channel.
              <br />
              It's basically the SEO tool of YouTube. There's a free and paid
              version, so I highly recommend giving it a try.
              <br />
              <i>
                Use this to look at other videos similar channels are making and
                how well they're performing
              </i>
            </p>
            <h4>
              <a
                href="https://www.tubebuddy.com"
                target="_blank"
                class="no-color"
                rel="noopener noreferrer"
              >
                <u>Try it out here.</u>{" "}
              </a>
            </h4>
            <br />
            <h3>YouTube Growth Tools: VidIQ</h3>
            <p>
              VidIQ is similar to TubeBuddy, but has a little more polish. It
              allows you to generate keywords and tags for your video.
              <br />
              They've also implemented some thumbnail generation features, but
              I'm not a huge fan.
              <br />
              <i>
                Use this tool to plan your keywords and different video ideas.
              </i>
            </p>
            <h4>
              <a
                href="https://vidiq.com/"
                target="_blank"
                class="no-color"
                rel="noopener noreferrer"
              >
                <u>Try it out here.</u>{" "}
              </a>
            </h4>
            <br />
            <a
              href="https://calendly.com/nathanblee/hoshino-media-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-custom brand btn-lg page-scroll"
            >
              Book a Call
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
