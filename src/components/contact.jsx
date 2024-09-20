import React, { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    optInSMS: false,
  });

  const [buttonText, setButtonText] = useState("Submit");
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({ email: "", phone: "" });

  const validateEmail = (email) => {
    // Simple regex for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const validatePhone = (phone) => {
    // Simple regex for phone number validation (US phone numbers)
    const phonePattern = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
    return phonePattern.test(phone);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = validateEmail(formData.email);
    const isValidPhone = validatePhone(formData.phone);

    if (!isValidEmail || !isValidPhone) {
      setErrors({
        email: !isValidEmail ? "Invalid email format" : "",
        phone: !isValidPhone ? "Invalid phone format (e.g. 123-456-7890)" : "",
      });
      return;
    }

    setIsSending(true);
    setButtonText("Sending...");

    emailjs
      .sendForm(
        "service_0o9gqfd", // Replace with your service ID
        "template_mfm8eam", // Replace with your template ID
        e.target,
        "mDnwL7ATmhWms9Hv3" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          setButtonText("Message Sent");
        },
        (error) => {
          console.error(error.text);
          setIsSending(false);
          setButtonText("Something went wrong");
        }
      );
  };

  const formStyles = {
    maxWidth: "400px",
    margin: "150px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const labelStyles = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    fontSize: "14px",
  };

  const inputStyles = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  };

  const textAreaStyles = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    height: "120px",
  };

  const checkboxStyles = {
    marginRight: "10px",
  };

  const errorStyles = {
    color: "red",
    fontSize: "12px",
    marginBottom: "10px",
  };

  const buttonStyles = {
    width: "100%",
    padding: "10px",
    backgroundColor: isSending ? "#ccc" : "#ff9a3c",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: isSending ? "not-allowed" : "pointer",
    fontSize: "16px",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <h3>Contact Us</h3>
      <br />
      <div>
        <label htmlFor="name" style={labelStyles}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="email" style={labelStyles}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyles}
        />
        {errors.email && <div style={errorStyles}>{errors.email}</div>}
      </div>

      <div>
        <label htmlFor="phone" style={labelStyles}>
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          style={inputStyles}
          pattern="^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$" // Ensures HTML5 validation too
        />
        {errors.phone && <div style={errorStyles}>{errors.phone}</div>}
      </div>

      <div>
        <label htmlFor="message" style={labelStyles}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          style={textAreaStyles}
        />
      </div>

      <div>
        <label htmlFor="optInSMS" style={labelStyles}>
          <input
            type="checkbox"
            id="optInSMS"
            name="optInSMS"
            checked={formData.optInSMS}
            onChange={handleChange}
            style={checkboxStyles}
          />
          I agree to{" "}
          <a href="/terms" target="_blank" rel="noopener noreferrer">
            terms & conditions
          </a>{" "}
          and{" "}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            privacy policy
          </a>{" "}
          provided by the company. By providing my phone number, I agree to
          receive text messages from the business.
        </label>
      </div>

      <button
        type="submit"
        style={buttonStyles}
        disabled={isSending}
        onMouseOver={(e) =>
          !isSending && (e.target.style.backgroundColor = "#ff6f3c")
        }
        onMouseOut={(e) =>
          !isSending && (e.target.style.backgroundColor = "#ff9a3c")
        }
      >
        {buttonText}
      </button>
    </form>
  );
};
