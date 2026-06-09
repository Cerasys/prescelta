import React from "react";
import "./terms.css";

export const Terms = () => {
  return (
    <div className="trms-hub-wrapper">
      <div className="trms-hub-container">
        {/* Header Block Section */}
        <div className="trms-header-block">
          <h1 className="trms-main-title">Terms & Conditions</h1>
          <p className="trms-main-subtitle">
            Prescelta LLC DBA Hoshino Media SMS Framework Protocols
          </p>
        </div>

        {/* Unified Glass Document Card */}
        <div className="trms-document-card">
          <div className="trms-text-engine">
            {/* Inline typography locked to bypass global CSS contamination */}
            <h3
              style={{
                fontSize: "2.2rem",
                fontWeight: 700,
                color: "#ffffff",
                marginTop: "0px",
                marginBottom: "12px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: "8px",
              }}
            >
              1. Program description:
            </h3>
            <p>
              When opted-in, you will receive text messages (SMS/MMS) to your
              mobile number. These kinds of messages may include a response to
              an inquiry, real-time texts to ask and answer questions about our
              services and pricing, and appointment confirmations.
            </p>

            <h3
              style={{
                fontSize: "2.2rem",
                fontWeight: 700,
                color: "#ffffff",
                marginTop: "36px",
                marginBottom: "12px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: "8px",
              }}
            >
              2. Program frequency:
            </h3>
            <p>Message frequency will vary depending on the conversation.</p>

            <h3
              style={{
                fontSize: "2.2rem",
                fontWeight: 700,
                color: "#ffffff",
                marginTop: "36px",
                marginBottom: "12px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: "8px",
              }}
            >
              3. Opt out:
            </h3>
            <p>
              You can opt-out of this service at any time. Just text “STOP” to
              the phone number. After you text “STOP” to us, we will send you an
              SMS reply to confirm that you have been unsubscribed. After this,
              you will no longer receive SMS messages from us. If you want to
              join again, just sign up as you did the first time or text
              “START,” and we will start sending SMS messages to you again.
            </p>

            <h3
              style={{
                fontSize: "2.2rem",
                fontWeight: 700,
                color: "#ffffff",
                marginTop: "36px",
                marginBottom: "12px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: "8px",
              }}
            >
              4. Help:
            </h3>
            <p>
              If you are experiencing any issues, you can reply with the keyword
              HELP. Or, you can get help directly from us at{" "}
              <a
                href="mailto:support@hoshinomedia.com"
                style={{
                  color: "#ffffff",
                  fontWeight: "600",
                  textDecoration: "underline",
                }}
              >
                support@hoshinomedia.com
              </a>
              .
            </p>

            <h3
              style={{
                fontSize: "2.2rem",
                fontWeight: 700,
                color: "#ffffff",
                marginTop: "36px",
                marginBottom: "12px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: "8px",
              }}
            >
              5. Interruption:
            </h3>
            <p>
              Carriers, such as AT&T, are not liable for delayed or undelivered
              messages.
            </p>

            <h3
              style={{
                fontSize: "2.2rem",
                fontWeight: 700,
                color: "#ffffff",
                marginTop: "36px",
                marginBottom: "12px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: "8px",
              }}
            >
              6. Costs:
            </h3>
            <p>
              Message and data rates may apply for any messages sent to you from
              us and to us from you. If you have any questions about your text
              plan or data plan, please contact your wireless provider.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
