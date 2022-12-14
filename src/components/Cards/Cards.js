import React from "react";
import "./Cards.css";
import LocationData from "../LogeData/Logement.json";
import Card from "../Card/Card";

//Création de chaque carte d'hébergement

export default function Cards() {
  return (
    <div className="Container">
      <div className="Background">
        {LocationData.map((Location) => {
          return (
           
                Card(Location.id, Location.title, Location.cover)  
            
           
          );
        })}
      </div>
    </div>
  );
}