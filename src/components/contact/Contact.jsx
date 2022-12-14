import React from "react";
import "./contact.css";

import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { SiFiverr } from "react-icons/si";

const Contact = () => {
  const resetForm = () => {
    document.getElementById("contact_form").reset();
    alert("Form submitted successfully. Thanks :)");
    window.scrollTo(0, 0);
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a
            href="mailto:majidalykhan@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
          </a>

          <a
            href="https://www.linkedin.com/in/majidalykhan/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
          </a>

          <a
            href="https://github.com/majidalykhan"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="contact__option-icon" />
            <h4>Github</h4>
          </a>

          <a
            href="https://www.fiverr.com/majidalykhan"
            target="_blank"
            rel="noreferrer"
          >
            <SiFiverr className="contact__option-icon" />
            <h4>Fiverr</h4>
          </a>

          <a
            href="https:/api.whatsapp.com/send?phone=03105484207"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>Whatsapp</h4>
          </a>
        </div>
        {/* End of Contact Options */}
        <form
          id="contact_form"
          action="https://formspree.io/f/mzbwqelr"
          method="POST"
        >
          {/* Form submission to set up later */}
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn" onClick={resetForm}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
