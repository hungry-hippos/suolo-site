import React from "react";
import ServiceCard from "./ServiceCard";
import planImg from "../images/plan.jpg";
import constImg from "../images/construccion.jpg";
import salesImg from "../images/sales.jpg";
import handleViewport from "react-in-viewport";

import "../stylesheets/SecondSection.css";

function FirstEntryBlock(props) {
  const { inViewport, forwardedRef } = props;
  if (inViewport) {
    return (
      <div
        className="secondSectionEntry entryWithBackgroundSquare"
        ref={forwardedRef}
      >
        <ServiceCard type="Planeacion" />
        <div className="whiteBackgroundSquare topWhiteSquare"></div>
        <div className="entryImgHolder">
          <img src={planImg} alt="" />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="secondSectionEntry entryWithBackgroundSquare"
        ref={forwardedRef}
      ></div>
    );
  }
}

function FirstEntry() {
    const ViewportFirstEntry = handleViewport(
        FirstEntryBlock /** options: {}, config: {} **/
      );
  return <ViewportFirstEntry />;
}

function SecondEntryBlock(props) {
  const { inViewport, forwardedRef } = props;
  if (inViewport) {
    return (
      <div className="secondSectionEntry mirrored" ref={forwardedRef}>
        <ServiceCard type="Construccion" />
        <div className="entryImgHolder">
          <img src={constImg} alt="" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="secondSectionEntry mirrored" ref={forwardedRef}></div>
    );
  }
}

function SecondEntry() {
    const ViewportSecondEntry = handleViewport(
        SecondEntryBlock /** options: {}, config: {} **/
      );
  return <ViewportSecondEntry />;
}

function ThirdEntryBlock(props) {
  const { inViewport, forwardedRef } = props;
  if (inViewport) {
    return (
      <div
        className="secondSectionEntry entryWithBackgroundSquare"
        ref={forwardedRef}
      >
        <ServiceCard type="Comercializacion" />
        <div className="whiteBackgroundSquare"></div>
        <div className="entryImgHolder">
          <img src={salesImg} alt="" />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="secondSectionEntry entryWithBackgroundSquare"
        ref={forwardedRef}
      ></div>
    );
  }
}

function ThirdEntry() {
    const ViewportThirdEntry = handleViewport(
        ThirdEntryBlock /** options: {}, config: {} **/
      );
  return <ViewportThirdEntry />;
}

export default function SecondSection() {
  return (
    <div className="secondSection">
      <FirstEntry />
      <SecondEntry />
      <ThirdEntry />
    </div>
  );
}
