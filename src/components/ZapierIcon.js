import { memo, useMemo } from "react";
import "./ZapierIcon.css";

const ZapierIcon = memo(
  ({
    zapierIconZapier,
    zapierIconWidth,
    zapierIconHeight,
    zapierIconPosition,
    zapierIconFlexShrink,
  }) => {
    const zapierIconStyle = useMemo(() => {
      return {
        width: zapierIconWidth,
        height: zapierIconHeight,
        position: zapierIconPosition,
        flexShrink: zapierIconFlexShrink,
      };
    }, [
      zapierIconWidth,
      zapierIconHeight,
      zapierIconPosition,
      zapierIconFlexShrink,
    ]);

    return (
      <img
        className="zapier-icon"
        alt=""
        src={zapierIconZapier}
        style={zapierIconStyle}
      />
    );
  }
);

export default ZapierIcon;
