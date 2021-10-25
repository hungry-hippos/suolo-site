import React from "react";
import handleViewport from "react-in-viewport";
import "../stylesheets/RankingsSection.css";

function RankingsSectionBlock(props) {
  const { inViewport, forwardedRef } = props;
  if (inViewport) {
    return (
      <div className="rankingSectionHolder" ref={forwardedRef}>
        <div className="rankingEntry">
          <div className="rankingText">
            <div className="rankingNumber firstRank"># 5</div>
            <div className="rankingBodyCover"></div>
            <div className="rankingBody firstBody">
              <div>en</div>
              <div className="boldText">Start-Ups Mas Perras</div>
              <div>segun</div>
              <div className="italicsText">El Chavi</div>
            </div>
          </div>
        </div>
        <div className="rankingEntry">
          <div className="rankingText">
            <div className="rankingNumber secondRank"># 1</div>
            <div className="rankingBodyCover"></div>
            <div className="rankingBody secondBody">
              <div>en</div>
              <div className="boldText">Companias Que Me Van a Chingar</div>
              <div>segun</div>
              <div className="italicsText">Carlos Munoz</div>
            </div>
          </div>
        </div>
        <div className="rankingEntry">
          <div className="rankingText">
            <div className="rankingNumber thirdRank"># 8</div>
            <div className="rankingBodyCover"></div>
            <div className="rankingBody thirdBody">
              <div>en</div>
              <div className="boldText">Desarralladoras Globales</div>
              <div>segun</div>
              <div className="italicsText">Nosotros</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="rankingSectionHolder" ref={forwardedRef}></div>;
  }
}

const ViewportBlock = handleViewport(
  RankingsSectionBlock /** options: {}, config: {} **/
);
export default function RankingsSection() {
  return (
    <ViewportBlock
      onEnterViewport={() => console.log("enter")}
      onLeaveViewport={() => console.log("leave")}
    />
  );
}
