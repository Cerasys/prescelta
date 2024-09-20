import React from "react";
import "./terms.css";

export const Terms = () => {
  return (
    <React.Fragment>
      <header id="header"></header>
      <br />
      <div className="terms">
        <h2>Prescelta LLC SMS Terms & Conditions </h2>

        <h3>1.Program description:</h3>

        <p>
          When opted-in, you will receive text messages (SMS/MMS) to your mobile
          number. These kinds of messages may include a response to an inquiry,
          real-time texts to ask and answer questions about our services and
          pricing, and appointment confirmations.
        </p>

        <h3>2.Program frequency:</h3>

        <p>Message frequency will vary depending on the conversation.</p>

        <h3>3.Opt out: </h3>

        <p>
          You can opt-out of this service at any time. Just text “STOP” to the
          phone number. After you text “STOP” to us, we will send you an SMS
          reply to confirm that you have been unsubscribed. After this, you will
          no longer receive SMS messages from us. If you want to join again,
          just sign up as you did the first time or text “START,” and we will
          start sending SMS messages to you again.
        </p>

        <h3>4. Help:</h3>
        <p>
          If you are experiencing any issues, you can reply with the keyword
          HELP. Or, you can get help directly from us at nathan@prescelta.com.{" "}
        </p>

        <h3>5.Interruption: </h3>
        <p>
          Carriers, such as AT&T, are not liable for delayed or undelivered
          messages.
        </p>

        <h3>6. Costs:</h3>
        <p>
          Message and data rates may apply for any messages sent to you from us
          and to us from you. If you have any questions about your text plan or
          data plan, please contact your wireless provider.
        </p>
      </div>
    </React.Fragment>
  );
};
