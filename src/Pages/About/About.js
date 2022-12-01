import React from "react";
import Collapse from "../../../components/Collapse/Collapse";
import Header from "../../../components/Header/Header";
import Banner from "../../../components/Banner/Banner";
import Footer from "../../../components/Footer/Footer";
import BannerImage from "../../../Images/BannerAPropos.png";
import ImageMobile from "../../../Images/BannerAboutMobile.png";
import "./About.css";

import styled from "styled-components";

// styled component collapse

const CollapseStyle = styled.div`
  width: 70%;
  height: auto;
  margin: 30px auto 0;
  
  }
`;

// About page creation

export default function About() {
  return (
    <div>
      <Header />
      <div className="bannerDesktop">
        <Banner img={BannerImage} />{" "}
      </div>
      <div className="bannerMobile">
        {" "}
        <Banner img={ImageMobile} />{" "}
      </div>
      <div className="Container">
        <CollapseStyle>
          <Collapse
            title="Fiabilité"
            description="Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />{" "}
        </CollapseStyle>

        <CollapseStyle>
          <Collapse
            title="Respect"
            description="La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </CollapseStyle>

        <CollapseStyle>
          <Collapse
            title="Service"
            description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
           N'hésitez pas à nous contacter si vous avez la moindre question."
          />
        </CollapseStyle>

        <CollapseStyle>
          <Collapse
            title="Sécurité"
            description="La sécurité est la priorité de Kasa. 
          Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
          En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </CollapseStyle>
      </div>
      <Footer />
    </div>
  );
}
