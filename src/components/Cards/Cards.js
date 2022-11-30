import React from "react";
import "./Cards.css";
import LocationData from "../LogementData/Logement.json";

//Creation of each accomodation card

export default function Cards() {
  return (
    <div className="Container">
      <div className="Background">
        {LocationData.map((Location) => {
          return (
            <a href={`/Accommodation/${Location.id}`} key={Location.id}>
              <div className="box">
                <div className="box-content">
                  <p className="Title">{Location.title}</p>
                </div>
                <img className="Cover" src={Location.cover} alt="Location" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
