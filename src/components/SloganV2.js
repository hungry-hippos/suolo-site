import React, { useState } from "react";
import SuoloLogo from "./SuoloLogoSVG";
import "../stylesheets/SloganV2.css";
import handleViewport from "react-in-viewport";

function SloganV2Block(props) {
  const { inViewport, forwardedRef } = props;
  if (inViewport) {
    return (
      <div className="sloganHolder" ref={forwardedRef}>
        <div className="imageHolder">
          <SuoloLogo />
        </div>

        <div className="sloganText">
          <div className="sloganTextPadding">
            <span className="topSloganLine">UN SUOLO GRUPO</span>
            <span className="midSloganLine">UN SUOLO OBJETIVO</span>
            <span className="btmSloganLine">TUS SUENOS</span>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="sloganHolder" ref={forwardedRef}></div>;
  }
}

const ViewportBlock = handleViewport(
  SloganV2Block /** options: {}, config: {} **/
);
export default function SloganV2() {
  return <ViewportBlock />;
}
