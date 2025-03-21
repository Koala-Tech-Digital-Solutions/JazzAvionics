import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "628dee21-a929-489e-afe5-433f0bd98858");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>
          Feel free to reach out using our contact form or refer to the
          information provided below. Your feedback, questions, and suggestions
          are important to us as we strive to deliver exceptional service.
        </p>{" "}
        <br />
        <ul>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            (817) 412-3350
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            (786) 912-1643
          </li>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            Updateavionic@gmail.com
          </li>

          <li>
            {" "}
            <img src={location_icon} alt="" />
            Avon Park Executive Airport - Hangar 17
            <br /> FL 33825, USA{" "}
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label> Write your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
