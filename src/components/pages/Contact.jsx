import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import emailjs from "emailjs-com";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_grn2mnp', 'template_fatenmg', form.current, 'CzMfSI5AOChpY2l85')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <h1 className="headerFont">Contact Page</h1>
      <div className="container contact-container">
        <div className="contact-options">
          <article classname="contact-option">
            <MdOutlineEmail className="contact-icon"/>
            <h4>Email</h4>
            <h5>bertiemoogle@gmail.com</h5>
            <a href="mailto:bertiemoogle@gmail.com" target="_blank" rel="noreferrer" className="contactDetails">Email Me</a>
          </article>
          <article classname="contact-option">
            <RiMessengerLine className="contact-icon"/>
            <h4>Messenger</h4>
            <h5>James Fahey</h5>
            <a href="https://m.me/james.fahey" target="_blank" rel="noreferrer" className="contactDetails">Message Me</a>
          </article>
          <article classname="contact-option">
            <BsWhatsapp className="contact-icon"/>
            <h4>WhatsApp</h4>
            <h5>+44 0700 123456</h5>
            <a href="https://api.whatsapp.com/send?phone=0700123456" target="_blank" rel="noreferrer" className="contactDetails">WhatsApp Me</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name..." required />
          <input type="email" name="email" placeholder="Your email..." required />
          <textarea name="message" rows="10" placeholder="Your message here..." required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;