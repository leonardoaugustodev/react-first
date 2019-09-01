import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo.svg";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo" />
      <div>
        <div>Meu perfil</div>
        <i className="material-icons">account_circle</i>
      </div>
    </div>
  );
}

export default Header;
