import React from 'react';
import Header from "../../components/Header/Header";

import {useParams } from "react-router-dom";
import LogementFile from "../../components/LogeData/Logement.json";

import Collapse from "../../components/Collapse/Collapse";
import Carrousel from "../../components/Carrousel/Carrousel";
import Footer from "../../components/Footer/Footer";
import "./Accommodation.css";
import ErrorPage from "../Error404/Error404";
import starsPink from "../../Images/starsRose.svg";
import starsGrey from "../../Images/starsGrey.svg";


export default function Accommodation() {
  // Recupération de l'ID par useParams

  const ID = useParams();

  // L'ID récupéré avec useParams doit correspondre à l'ID de l'hébergement.

  const findLogement = LogementFile.find(
    (theAccomodation) => theAccomodation.id === ID.id
  );

  //Si l'ID ne correspond pas, rediriger vers la page d'erreur.

  if (!findLogement) {
    return <ErrorPage />;
  }

  // déclaration de la const theTags 

  const theTags = findLogement.tags;

  // déclaration const theEquipements 

  const theEquipements = findLogement.equipments;


  //Carte pour chaque équipement

  // création de const pour les étoiles

  // pour la boucle, push les bonnes étoiles roses et grises

  const stars = findLogement.rating;

  const ratingArray = [];

  for (let i = 0; i < stars; i++) {
    ratingArray.push(
      <img
        key={"pinkStar" + i}
        className="stars"
        src={starsPink}
        alt="Pink Stars"
      />
    );
  }

  for (let a = ratingArray.length; a < 5; a++) {
    ratingArray.push(
      <img
        key={"greyStar" + a}
        className="stars"
        src={starsGrey}
        alt="Grey Stars"
      />
    );
  }

  return (
    <div>
      <Header />
      <div className="ContainerContent">
        <Carrousel slides={findLogement.pictures} />

        <div className="contenuContainer">
          <div className="containerTitreLocationTags">
            {findLogement && (
              <h1 className="TitreLogement"> {findLogement.title}</h1>
            )}
            {findLogement && (
              <p className="location">{findLogement.location}</p>
            )}

            <div className="tags">
              {theTags.map((tag, eachTag) => (
                <button key={eachTag} className="tag">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="containerHostRating">
            <div key={findLogement.host.name} className="host">
              <p className="name"> {findLogement.host.name} </p>
              <img className="picture" src={findLogement.host.picture} alt="host" />
            </div>
            <div className="rating">{ratingArray}</div>
          </div>
        </div>

        <div className="collapsesContainer">
          <div className="Collapses">
          
              <Collapse
                title="Description"
                description={findLogement.description}
              />
                    
              <Collapse
                className="Equipement"
                title="Equipements"
                description={theEquipements.map((Equip) => (
                  <li key={Equip}>
                    {Equip}
                  </li>
                ))}
              />
           
          </div>
        </div>
      </div>
      <Footer />
    </div>
    );
  }
