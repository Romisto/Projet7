import React from "react";
import "./Banner.css";

//Banner creation

export default function Banner(props) {
  return (
    <div className="ContainerBanner">
      <div className="Content">
        <h2 className="titleBanner">
          <span>{props.title}</span>
        </h2>
        <img className="Image" src={props.img} alt="" />
      </div>
    </div>
  );
}
