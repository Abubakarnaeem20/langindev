import { memo } from "react";
import "./ContactForm.css";

const ContactForm = memo(() => {
  return (
    <div className="section-navbar">
      <div className="section-navbar-child" />
      <b className="this-is-an">
        This is an announcement tagline for you to insert
      </b>
      <div className="home-group">
        <b className="home2">Home</b>
        <b className="home2">About</b>
        <b className="home2">Pricing</b>
        <b className="home2">Blog</b>
      </div>
      <img className="section-navbar-item" alt="" src="/group-1.svg" />
      <div className="contact-now-wrapper">
        <b className="home2">Contact Now</b>
      </div>
    </div>
  );
});

export default ContactForm;
