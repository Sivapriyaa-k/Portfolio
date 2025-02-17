import React from "react";
import "./contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "91ce9097-84c9-4129-85d1-2b41a3e0ed1d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className="contact d-flex flex-column align-items-center" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section d-flex">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <a href="mailto:sivapriyakalamegam@gmail.com" className="d-flex">
                <img src={mail_icon} alt="" />
                <p>Sivapriyakalamegam@gmail.com</p>
              </a>
            </div>
            <div className="contact-detail">
              <a href="tel:9788174642" className="d-flex">
                <img src={call_icon} alt="" /> <p>9788174642</p>
              </a>
            </div>
            <div className="contact-detail d-flex">
              <img src={location_icon} alt="" />
              <p>
                50,<br></br>palamaneri road,<br></br>thirukattupalli,Thanjavur
                (DT),<br></br>TamilNadu-613104
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right d-flex flex-column ">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your message"
            required
          />
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
