import { memo } from "react";
import "./SectionFeature.css";

const SectionFeature = memo(() => {
  return (
    <div className="section-feature1">
      <div className="header-text3">
        <b className="let-your-business2">
          Let your business thrive under our supervision
        </b>
        <div className="launch-a-business-container3">
          <p className="we-are-making">
            Launch a business today with our help and get it done with amazing
            launch features, websites and more with uifry. We help business like
            yours thrive every day and beyond.
          </p>
          <p className="we-are-making">&nbsp;</p>
          <p className="we-are-making">We are making every business grow!</p>
          <p className="we-are-making">&nbsp;</p>
        </div>
        <div className="rating-container">
          <div className="rating4">
            <div className="easiest-way-to">
              Super useful and easy to use interface
            </div>
            <div className="button-34">
              <img
                className="iconlylight-outlinetick-squa3"
                alt=""
                src="/iconlylightoutlinetick-square3.svg"
              />
            </div>
          </div>
          <div className="rating4">
            <div className="easiest-way-to">
              Easiest way to grow your business in days
            </div>
            <div className="button-34">
              <img
                className="iconlylight-outlinetick-squa3"
                alt=""
                src="/iconlylightoutlinetick-square3.svg"
              />
            </div>
          </div>
        </div>
        <div className="cta3">
          <div className="button3">
            <b className="contact-now3">Contact Now</b>
            <img
              className="iconlylight-outlinearrow-r5"
              alt=""
              src="/iconlylightoutlinearrow--right-2.svg"
            />
          </div>
        </div>
      </div>
      <div className="section-feature-child">
        <div className="group-child6" />
      </div>
    </div>
  );
});

export default SectionFeature;
