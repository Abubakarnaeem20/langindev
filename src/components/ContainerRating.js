import { memo } from "react";
import "./ContainerRating.css";

const ContainerRating = memo(
  ({ projectCount, ratingCount, metricImageUrl }) => {
    return (
      <div className="rating">
        <div className="button-3">
          <img
            className="iconlylight-outlinetick-squa1"
            alt=""
            src={projectCount}
          />
        </div>
        <b className="successfull-projects">
          <p className="p">{ratingCount}</p>
          <p className="successfull-projects1">{metricImageUrl}</p>
        </b>
      </div>
    );
  }
);

export default ContainerRating;
