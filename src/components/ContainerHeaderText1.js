import { memo } from "react";
import "./ContainerHeaderText1.css";

const ContainerHeaderText1 = memo(() => {
  return (
    <div className="header-text">
      <b className="let-your-business">
        Let your business thrive under our supervision
      </b>
      <div className="launch-a-business-container">
        <p className="launch-a-business">
          Launch a business today with our help and get it done with amazing
          launch features, websites and more with uifry. We help business like
          yours thrive every day and beyond.
        </p>
        <p className="launch-a-business">&nbsp;</p>
        <p className="launch-a-business">
          <b>We are making every business grow!</b>
        </p>
        <p className="launch-a-business">&nbsp;</p>
      </div>
      <div className="frame-parent">
        <div className="iconlylight-outlineprofile-parent">
          <img
            className="iconlylight-outlineprofile1"
            alt=""
            src="/iconlylightoutlineprofile.svg"
          />
          <div className="full-name">Full Name</div>
        </div>
        <div className="iconlylight-outlineprofile-parent">
          <img
            className="iconlylight-outlineprofile1"
            alt=""
            src="/iconlylightoutlinesend.svg"
          />
          <div className="full-name">Email Address</div>
        </div>
        <div className="cta">
          <div className="button">
            <b className="contact-now">Contact Now</b>
            <img
              className="iconlylight-outlinearrow-r1"
              alt=""
              src="/iconlylightoutlinearrow--right-2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContainerHeaderText1;
