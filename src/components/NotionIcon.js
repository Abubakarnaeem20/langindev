import { memo, useMemo } from "react";
import "./NotionIcon.css";

const NotionIcon = memo(
  ({
    notionIconNotion,
    notionIconWidth,
    notionIconHeight,
    notionIconPosition,
    notionIconFlexShrink,
  }) => {
    const notionIconStyle = useMemo(() => {
      return {
        width: notionIconWidth,
        height: notionIconHeight,
        position: notionIconPosition,
        flexShrink: notionIconFlexShrink,
      };
    }, [
      notionIconWidth,
      notionIconHeight,
      notionIconPosition,
      notionIconFlexShrink,
    ]);

    return (
      <img
        className="notion-icon"
        alt=""
        src={notionIconNotion}
        style={notionIconStyle}
      />
    );
  }
);

export default NotionIcon;
