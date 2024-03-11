import React from "react";

const Calendly = () => {
  return (
    <div>
      <div
        class="calendly-inline-widget"
        data-url="https://calendly.com/prescelta/private-practice-goal-setting"
        style="min-width:320px;height:700px;"
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </div>
  );
};

export default Calendly;
