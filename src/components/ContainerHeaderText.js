import { memo } from "react";
import ContainerRating from "./ContainerRating";
import "./ContainerHeaderText.css";

const ContainerHeaderText = memo(() => {
  return (
    <div className="header-text1">
      <b className="let-your-business1">
        Let your business thrive under our supervision
      </b>
      <div className="launch-a-business-container1">
        <p className="launch-a-business1">
          Launch a business today with our help and get it done with amazing
          launch features, websites and more with uifry. We help business like
          yours thrive every day and beyond.
        </p>
        <p className="launch-a-business1">&nbsp;</p>
      </div>
      <div className="rating-parent">
        <ContainerRating
          projectCount="/iconlylightoutlinetick-square.svg"
          ratingCount="100+ "
          metricImageUrl="Successfull Projects"
        />
        <ContainerRating
          projectCount="/iconlylightoutlinetick-square1.svg"
          ratingCount="978+ "
          metricImageUrl="Clients Today"
        />
      </div>
      <div className="cta1">
        <div className="button1">
          <b className="contact-now1">Contact Now</b>
        </div>
        <div className="button-2">
          <img
            className="iconlylight-outlinearrow-r2"
            alt=""
            src="/iconlylightoutlinearrow--right-21.svg"
          />
        </div>
        <b className="book-a-demo">Book a Demo Today</b>
      </div>
    </div>
  );
});

export default ContainerHeaderText;
