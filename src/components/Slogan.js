import React from "react";
import SuoloLogoTowers from "../images/suoloLogoClear.png";
import "../stylesheets/Slogan.css";

export default function Slogan() {
  return (
    <div className="sloganHolder">
      {/* <img src={SuoloLogo} alt='' /> */}
      <div className="carouselLogoHolder">
        <div className="sloganHolderLeftHalf">
          <img src={SuoloLogoTowers} alt="" />
        </div>
        <div className="sloganHolderRightHalf">
          <div className="sloganText">
            <span className="topSloganLine">UN SUOLO GRUPO</span>
            <span className="midSloganLine">UN SUOLO OBJETIVO</span>
            <span className="btmSloganLine">TUS SUENOS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
