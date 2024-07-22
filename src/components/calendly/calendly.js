import React from "react";

const Calendly = () => {
  return (
    <div id="calendly">
      <div className="container">
        <div className="col-md-12">
          <div className="row"></div>
          <div>
            <div
              class="calendly-inline-widget"
              data-url="https://calendly.com/nathanblee/rei"
              style={{ minWidth: "320px", height: "100%" }}
            ></div>
            <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            ></script>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendly;
