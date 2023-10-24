import { memo, useMemo } from "react";
import "./MarvelIcon.css";

const MarvelIcon = memo(
  ({
    marvelIconMarvel,
    marvelIconWidth,
    marvelIconHeight,
    marvelIconPosition,
  }) => {
    const marvelIconStyle = useMemo(() => {
      return {
        width: marvelIconWidth,
        height: marvelIconHeight,
        position: marvelIconPosition,
      };
    }, [marvelIconWidth, marvelIconHeight, marvelIconPosition]);

    return (
      <img
        className="marvel-icon"
        alt=""
        src={marvelIconMarvel}
        style={marvelIconStyle}
      />
    );
  }
);

export default MarvelIcon;
