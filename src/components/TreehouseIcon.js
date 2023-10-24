import { memo, useMemo } from "react";
import "./TreehouseIcon.css";

const TreehouseIcon = memo(
  ({
    treehouseIconTreehouse,
    treehouseIconWidth,
    treehouseIconHeight,
    treehouseIconPosition,
    treehouseIconFlexShrink,
  }) => {
    const treehouseIconStyle = useMemo(() => {
      return {
        width: treehouseIconWidth,
        height: treehouseIconHeight,
        position: treehouseIconPosition,
        flexShrink: treehouseIconFlexShrink,
      };
    }, [
      treehouseIconWidth,
      treehouseIconHeight,
      treehouseIconPosition,
      treehouseIconFlexShrink,
    ]);

    return (
      <img
        className="treehouse-icon"
        alt=""
        src={treehouseIconTreehouse}
        style={treehouseIconStyle}
      />
    );
  }
);

export default TreehouseIcon;
