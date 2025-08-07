import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import mail_icon from "/assets/mail-icon.png";
import phone_icon from "/assets/phone-icon.png";
import location_icon from "/assets/location-icon.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSent(false);

    emailjs
      .send(
        "service_cx97t6m",
        "template_fx95ydh",
        {
          from_name: formData.name,
          reply_to: formData.phone,
          message: `Phone: ${formData.phone}\n\n Name: ${formData.name}\n\n${formData.message}`,
        },
        "xm3iiEWUBYyQG12Vc"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setFormData({ name: "", phone: "", message: "" });
          setIsLoading(false);
          setIsSent(true);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setIsLoading(false);
          alert("Oops! Something went wrong. Please try again later.");
        }
      );
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
                (817) 412-3350
              </li>
              <li>
                <img src={phone_icon} alt="" />
                (786) 912-1643
              </li>
              <li>
                <img src={mail_icon} alt="" />
                Updateavionic@gmail.com
              </li>
              <li>
                <img src={location_icon} alt="" />
                919 Biscayne Blvd D8
                <br /> Deland, FL 32724, USA
              </li>
            </ul>
          </div>

          <div className="contact-col">
            <form onSubmit={handleSubmit}>
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                required
              />
              <label>Write your Message Here</label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your Message"
                required
              ></textarea>
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
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
