import React from "react";
import "./Cards.css";
import LocationData from "../LogeData/Logement.json";
import card from "../card/card";

//Création de chaque carte d'hébergement

export default function Cards() {
  return (
    <div className="Container">
      <div className="Background">
        {LocationData.map((Location) => {
          return (
            card
          );
        })}
      </div>
    </div>
  );
}
