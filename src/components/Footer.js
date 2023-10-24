import { memo } from "react";
import "./Footer.css";

const Footer = memo(() => {
  return (
    <div className="section-footer">
      <div className="home-parent">
        <b className="about">Home</b>
        <b className="about">About</b>
        <b className="about">Pricing</b>
        <b className="about">Blog</b>
        <b className="about">Contact</b>
      </div>
      <div className="all-rights-reserved-uifryco-wrapper">
        <div className="about">
          All rights reserved ® uifry.com | Terms and conditions apply!
        </div>
      </div>
      <img className="section-footer-child" alt="" src="/group-2.svg" />
      <div className="section-footer-item" />
      <div className="instagram-parent">
        <img className="instagram-icon" alt="" src="/instagram.svg" />
        <img className="instagram-icon" alt="" src="/flickr.svg" />
        <img className="instagram-icon" alt="" src="/instagram.svg" />
        <img className="instagram-icon" alt="" src="/pinterest.svg" />
        <img className="instagram-icon" alt="" src="/twitter.svg" />
      </div>
    </div>
  );
});

export default Footer;
