import { memo, useMemo } from "react";
import "./ShazamIcon.css";

const ShazamIcon = memo(
  ({
    shazamIconShazam,
    shazamIconWidth,
    shazamIconHeight,
    shazamIconPosition,
    shazamIconFlexShrink,
  }) => {
    const shazamIconStyle = useMemo(() => {
      return {
        width: shazamIconWidth,
        height: shazamIconHeight,
        position: shazamIconPosition,
        flexShrink: shazamIconFlexShrink,
      };
    }, [
      shazamIconWidth,
      shazamIconHeight,
      shazamIconPosition,
      shazamIconFlexShrink,
    ]);

    return (
      <img
        className="shazam-icon"
        alt=""
        src={shazamIconShazam}
        style={shazamIconStyle}
      />
    );
  }
);

export default ShazamIcon;
