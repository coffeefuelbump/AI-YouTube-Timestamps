import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEnvelope, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "./HelpForm.css";

const HelpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.email || !formData.message) {
      alert("Please fill in both email and message fields.");
      return;
    }

    // Create mailto link
    const subject = encodeURIComponent("TubeStamp Help Request");
    const body = encodeURIComponent(
      `Hello,

I need help with TubeStamp.

From: ${formData.email}

Message:
${formData.message}

Best regards`
    );

    const mailtoLink = `mailto:example@gmail.com?subject=${subject}&body=${body}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      email: "",
      message: ""
    });
  };

  return (
    <div className="help-form-container">
      <div className="help-form-wrapper">
        <div className="help-form-header">
          <FontAwesomeIcon icon={faCommentDots} className="help-form-icon" />
          <h2 className="help-form-title">Need Help?</h2>
          <p className="help-form-subtitle">
            Get in touch with us and we'll get back to you as soon as possible.
          </p>
        </div>

        <form className="help-form" onSubmit={handleSubmit}>
          <div className="help-form-field">
            <label htmlFor="email" className="help-form-label">
              <FontAwesomeIcon icon={faEnvelope} className="field-icon" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="help-form-input"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="help-form-field">
            <label htmlFor="message" className="help-form-label">
              <FontAwesomeIcon icon={faCommentDots} className="field-icon" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="help-form-textarea"
              placeholder="Tell us how we can help you..."
              rows="5"
              required
            />
          </div>

          <button type="submit" className="help-form-submit">
            <FontAwesomeIcon icon={faPaperPlane} className="submit-icon" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpForm;