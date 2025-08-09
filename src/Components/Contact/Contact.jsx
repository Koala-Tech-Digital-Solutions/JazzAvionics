import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import mail_icon from "/assets/mail-icon.png";
import phone_icon from "/assets/phone-icon.png";
import location_icon from "/assets/location-icon.png";

const SERVICE_ID = "service_hbnl5y5";
const TEMPLATE_TO_US = "template_fx95ydh"; // Contact Us template (shows {{name}}, {{email}}, {{phone}}, {{message}})
const TEMPLATE_AUTOREPLY = "template_0tfq1oa"; // Auto-Reply template (needs {{to_email}}, {{to_name}}, {{user_message}})
const PUBLIC_KEY = "xm3iiEWUBYyQG12Vc";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    setIsLoading(true);
    setIsSent(false);

    // Must match variables in your "Contact Us" template
    const contactParams = {
      name,
      email,
      phone: phone || "N/A",
      message,
    };

    // Must match variables in your "Auto-Reply" template
    const autoReplyParams = {
      to_email: email,
      to_name: name || "there",
      user_message: message, // <-- make sure {{user_message}} exists in the auto-reply template body
    };

    try {
      await Promise.all([
        emailjs.send(SERVICE_ID, TEMPLATE_TO_US, contactParams, PUBLIC_KEY),
        emailjs.send(
          SERVICE_ID,
          TEMPLATE_AUTOREPLY,
          autoReplyParams,
          PUBLIC_KEY
        ),
      ]);

      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Oops! Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isSent && (
        <div className="confirmation-message">
          <h3>✅ Message Sent Successfully!</h3>
          <p>Thank you for contacting us. We'll get back to you shortly.</p>
        </div>
      )}

      {!isSent && (
        <div className="contact">
          <div className="contact-col">
            <h3>Send us a message</h3>
            <p>
              Feel free to reach out using our contact form or refer to the
              information provided below. Your feedback, questions, and
              suggestions are important to us as we strive to deliver
              exceptional service.
            </p>
            <br />
            <ul>
              <li>
                <img src={phone_icon} alt="" />
                (689) 212-4076
              </li>
              <li>
                <img src={phone_icon} alt="" />
                (863) 335-5022
              </li>
              <li>
                <img src={mail_icon} alt="" />
                Support@jazzavionics.com
              </li>
              <li>
                <img src={location_icon} alt="" />
                919 Biscayne Blvd D8, Deland, FL 32724, USA
              </li>
            </ul>
          </div>

          <div className="contact-col">
            <form onSubmit={handleSubmit} noValidate>
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

              <label>Phone Number (optional)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your mobile number"
              />

              <label>Write your Message Here</label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your Message"
                required
              />

              <button
                type="submit"
                className="btn dark-btn"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Submit Now"}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="map-container" style={{ marginTop: "2rem" }}>
        <iframe
          title="New Location - 919 Biscayne Blvd D8, DeLand, FL"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=919+Biscayne+Blvd+D8,+DeLand,+FL+32724&output=embed"
        />
      </div>
    </>
  );
};

export default Contact;
