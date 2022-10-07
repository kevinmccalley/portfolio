import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}

function ContactUs() {
  const captchaRef = useRef(null);
  const navigate = useNavigate();
  const form = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      emailjs
        .sendForm(
          "service_nrv3iwt",
          "template_unkibll",
          form.current,
          "EcEZHC4ns5Pz4q-1D",
          captchaRef.current.getValue()
        )
        .then(
          (result) => {
            console.log(result.text);
            navigate("/thankyou");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch (error) {
      console.log(error.text);
    }
  };
  return (
    <div>
      <div className="ContactForm">
        <form ref={form} onSubmit={handleSubmit}>
          <label htmlFor="user_name">Name</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="enter your name"
            required
          />
          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="enter your email address"
            required
            email="true"
          />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder="enter your message" required />
          <div className="recaptcha-container">
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_SITE_KEY}
              ref={captchaRef}
              onChange={onChange}
              theme="dark"
            />
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
