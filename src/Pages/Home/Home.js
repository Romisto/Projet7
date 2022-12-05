import React from 'react';
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import BannerImage from "../../Images/BannerBackground.png";

const Home = () => {
  return (
    
      <div className="Home">
      <Header />

      <div className="imagebanner">
        <Banner title="Chez vous, partout et ailleurs" img={BannerImage} />
      </div>

      <Cards />
      <Footer />
    </div>
  );
};

export default Home;


