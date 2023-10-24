import { memo } from "react";
import "./GrowthCard.css";

const GrowthCard = memo(
  ({ rectangle21, growth, waysToGrowYourSaasIn21Day }) => {
    return (
      <div className="rectangle-container">
        <img className="frame-child" alt="" src={rectangle21} />
        <div className="header-text2">
          <div className="growth">{growth}</div>
          <b className="ways-to-grow">{waysToGrowYourSaasIn21Day}</b>
          <div className="button-21">
            <img
              className="iconlylight-outlinearrow-r3"
              alt=""
              src="/iconlylightoutlinearrow--right-21.svg"
            />
          </div>
        </div>
      </div>
    );
  }
);

export default GrowthCard;
