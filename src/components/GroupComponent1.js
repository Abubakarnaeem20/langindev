import { memo } from "react";
import IntercomIcon from "./IntercomIcon";
import TreehouseIcon from "./TreehouseIcon";
import ZapierIcon from "./ZapierIcon";
import MarvelIcon from "./MarvelIcon";
import NotionIcon from "./NotionIcon";
import ShazamIcon from "./ShazamIcon";
import "./GroupComponent1.css";

const GroupComponent1 = memo(() => {
  return (
    <div className="section-client-logo-parent">
      <div className="section-client-logo">
        <div className="rating7">
          <b className="trusted-by-over">
            Trusted by over 100+ businesses worldwide!
          </b>
        </div>
        <div className="section-client-logo-child" />
      </div>
      <div className="intercom-parent">
        <IntercomIcon
          intercomIconIntercom="/intercom.svg"
          intercomIconWidth="63px"
          intercomIconHeight="63px"
          intercomIconPosition="relative"
          intercomIconFlexShrink="0"
        />
        <TreehouseIcon
          treehouseIconTreehouse="/treehouse.svg"
          treehouseIconWidth="63px"
          treehouseIconHeight="63px"
          treehouseIconPosition="relative"
          treehouseIconFlexShrink="0"
        />
        <ZapierIcon
          zapierIconZapier="/zapier.svg"
          zapierIconWidth="63px"
          zapierIconHeight="63px"
          zapierIconPosition="relative"
          zapierIconFlexShrink="0"
        />
        <MarvelIcon
          marvelIconMarvel="/marvel.svg"
          marvelIconWidth="63px"
          marvelIconHeight="63px"
          marvelIconPosition="relative"
        />
        <NotionIcon
          notionIconNotion="/notion.svg"
          notionIconWidth="63px"
          notionIconHeight="63px"
          notionIconPosition="relative"
          notionIconFlexShrink="0"
        />
        <ShazamIcon
          shazamIconShazam="/shazam.svg"
          shazamIconWidth="63px"
          shazamIconHeight="63px"
          shazamIconPosition="relative"
          shazamIconFlexShrink="0"
        />
      </div>
    </div>
  );
});

export default GroupComponent1;
