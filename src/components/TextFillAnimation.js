import React from "react";
import "../stylesheets/TextFillAnimation.css";

export default function TextFillAnimation(props) {
  return (
    <div className="textFillDiv" data-text={props.text}>
      {props.text}
    </div>
  );
}
