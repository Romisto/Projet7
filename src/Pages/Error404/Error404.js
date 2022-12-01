import React from "react";
import "./Error404.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// création page Error 404

export default function Erreur() {
  const navigate = useNavigate();

  const backHomePage = () => {
    navigate("/");
  };
  return (
    <div>
      <Header />
      <h1 className="Error">404</h1>
      <p className="Oups">Oups! La page que vous demandez n'existe pas.</p>
      <p className="Back" onClick={backHomePage}>
        Retourner sur la page d'acceuil
      </p>
      <Footer />
    </div>
  );
}
