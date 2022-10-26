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
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>majialykhan@gmail.com</h5>
            <a href="mailto:majidalykhan@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Majid Ali Khan</h5>
            <a href="https://www.linkedin.com/in/majidalykhan/" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiFillGithub className="contact__option-icon" />
            <h4>Github</h4>
            <h5>majidalykhan</h5>
            <a href="https://github.com/majidalykhan" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <SiFiverr className="contact__option-icon" />
            <h4>Fiverr</h4>
            <h5>majidalykhan</h5>
            <a href="https://www.fiverr.com/majidalykhan" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+92-310-5484207</h5>
            <a
              href="https:/api.whatsapp.com/send?phone=03105484207"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form action="">
          {/* Form submission to set up later */}
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-secondary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
