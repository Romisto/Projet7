import React from "react";
import NavBar from "../NavigationBar/NavBar";
import "./Header.css";
import Logo from "../../Images/Logo.png";

export default function Header() {
  return (
    <div className="containerHeader">
      <div className="Header">
        <img className="Logo" src={Logo} alt="Logo Kasa" />
        <nav>
          <NavBar />
        </nav>
      </div>
    </div>
  );
}
