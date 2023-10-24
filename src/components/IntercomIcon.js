import { memo, useMemo } from "react";
import "./IntercomIcon.css";

const IntercomIcon = memo(
  ({
    intercomIconIntercom,
    intercomIconWidth,
    intercomIconHeight,
    intercomIconPosition,
    intercomIconFlexShrink,
  }) => {
    const intercomIconStyle = useMemo(() => {
      return {
        width: intercomIconWidth,
        height: intercomIconHeight,
        position: intercomIconPosition,
        flexShrink: intercomIconFlexShrink,
      };
    }, [
      intercomIconWidth,
      intercomIconHeight,
      intercomIconPosition,
      intercomIconFlexShrink,
    ]);

    return (
      <img
        className="intercom-icon"
        alt=""
        src={intercomIconIntercom}
        style={intercomIconStyle}
      />
    );
  }
);

export default IntercomIcon;
