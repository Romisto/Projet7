import React from "react";
import "./Footer.css";
import Logo from "../../Images/Logo-Footer.png";

//Footer creation

export default function Footer() {
  return (
    <div className="Footer">
      <img className="Logo-Footer" src={Logo} alt="" />
      <p className="Copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
