import React, { useState } from "react";

export const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    optInSMS: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const formStyles = {
    maxWidth: "400px",
    margin: "150px auto",
    padding: "20px", // 100px padding on top and bottom
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

  const checkboxStyles = {
    marginRight: "10px",
  };

  const buttonStyles = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const buttonHoverStyles = {
    backgroundColor: "#45a049",
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
        style={{ ...buttonStyles, ...buttonHoverStyles }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
      >
        Submit
      </button>
    </form>
  );
};
