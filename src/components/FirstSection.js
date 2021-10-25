import React, { useEffect, useState } from "react";
import FirstSectionCarousel from "./FirstSectionCarousel";
import "../stylesheets/FirstSection.css";

export default function FirstSection() {
  //used to create a delay to avoid overlapping show-carousel animation with flip-carousel-item animation
  const [showCarousel, setSetShowCarousel] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSetShowCarousel(true);
    }, 2000);
  }, []);

  return (
    <div id="firstSectionMain">
      <div className="title">
        <div className="title-inner">
          <div className="somos">
            <div className="somos-inner">GRUPO</div>
          </div>
          <div className="suolo">
            <div className="suolo-inner">SUOLO</div>
          </div>
        </div>
      </div>

      <div className="carouselHolder">
        {showCarousel && <FirstSectionCarousel />}
      </div>
    </div>
  );
}
