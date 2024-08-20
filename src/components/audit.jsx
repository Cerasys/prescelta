import React, { useEffect } from "react";

export const Audit = (props) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", "https://link.msgsndr.com/js/form_embed.js");
    head.appendChild(script);
  }, []);

  return (
    <React.Fragment>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/PtbuigvLMa7zfQmvxy3X"
        style="width:100%;height:100%;border:none;border-radius:3px"
        id="inline-PtbuigvLMa7zfQmvxy3X"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Free FB Ads Audit Form"
        data-height="838"
        data-layout-iframe-id="inline-PtbuigvLMa7zfQmvxy3X"
        data-form-id="PtbuigvLMa7zfQmvxy3X"
        title="Free FB Ads Audit Form"
      ></iframe>
    </React.Fragment>
  );
};
