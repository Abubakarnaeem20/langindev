import { memo, useMemo } from "react";
import "./FormContainer.css";

const FormContainer = memo(
  ({
    iconlyLightOutlineTickSqu,
    iconlyLightOutlineTimeCir,
    iconlyLightOutlineUpload,
    propTop,
    propBorderRadius,
  }) => {
    const sectionFeatureListStyle = useMemo(() => {
      return {
        top: propTop,
      };
    }, [propTop]);

    const frameDivStyle = useMemo(() => {
      return {
        borderRadius: propBorderRadius,
      };
    }, [propBorderRadius]);

    return (
      <div className="section-feature-list" style={sectionFeatureListStyle}>
        <div className="section-feature-list-child" />
        <div className="rating-group" style={frameDivStyle}>
          <div className="rating1">
            <div className="button-31">
              <img
                className="iconlylight-outlinetick-squa2"
                alt=""
                src={iconlyLightOutlineTickSqu}
              />
            </div>
            <div className="super-useful-and">
              Super useful and easy to with over 100+ customisations!
            </div>
          </div>
          <div className="rating2">
            <div className="button-32">
              <img
                className="iconlylight-outlinetick-squa2"
                alt=""
                src={iconlyLightOutlineTimeCir}
              />
            </div>
            <div className="super-useful-and1">
              Super useful and easy to with over 100+ customisations!
            </div>
          </div>
          <div className="rating1">
            <div className="button-33">
              <img
                className="iconlylight-outlinetick-squa2"
                alt=""
                src={iconlyLightOutlineUpload}
              />
            </div>
            <div className="super-useful-and2">
              Super useful and easy to with over 100+ customisations!
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default FormContainer;
