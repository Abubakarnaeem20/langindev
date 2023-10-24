import { memo } from "react";
import GrowthCard from "./GrowthCard";
import "./GrowthContainer.css";

const GrowthContainer = memo(() => {
  return (
    <div className="section-blog">
      <div className="frame-group">
        <GrowthCard
          rectangle21="/rectangle-21@2x.png"
          growth="Growth"
          waysToGrowYourSaasIn21Day="15 ways to grow your saas in 21 days with no money"
        />
        <GrowthCard
          rectangle21="/rectangle-211@2x.png"
          growth="Career"
          waysToGrowYourSaasIn21Day="Why everyone is moving today to subscribtions"
        />
        <GrowthCard
          rectangle21="/rectangle-212@2x.png"
          growth="Design"
          waysToGrowYourSaasIn21Day="9 ways to make it quick and never look back again in your life"
        />
      </div>
      <div className="section-header">
        <div className="our-latest-updates-for-you-her-parent">
          <b className="our-latest-updates">Our latest updates for you here!</b>
          <div className="whats-heppening-around">
            Whats heppening around the World.
          </div>
        </div>
      </div>
    </div>
  );
});

export default GrowthContainer;
