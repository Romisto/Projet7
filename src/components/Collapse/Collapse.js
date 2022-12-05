import React, { useState } from "react";
import "./Collapse.css";
import chevronUp from "../../Images/Fleche.svg";

//création du collapse

function Collapse(props) {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="Collapse">
      <div onClick={toggleState} className="Collapse-visible">
        <h1>
          {" "}
          <span>{props.title}</span>
        </h1>
        <img
          className={toggle ? "chevronDown" : "chevronUp"}
          src={chevronUp}
          alt="Arrow directional"
        />
      </div>
      <div className={toggle ? "Collapse-toggle Animation" : "Collapse-toggle"}>
        <p style={{ color: "#FF6060", textAlign: "left" }}>
          {props.description}
        </p>
      </div>
    </div>
  );
}
export default Collapse