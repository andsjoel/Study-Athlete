import React from "react";
import LogoPraia from "../img/HomeScreen/logo_praia_clube.png"
import LogoNacional from "../img/HomeScreen/logo_nacional.png"

const Footer = () => {
    return(
      <footer>
      <div className="partners">
        <img className="logoHome" src={LogoPraia} alt="Logo do Praia Clube" />
        <img className="logoHome nacional" src={LogoNacional} alt="Logo do Colegio Nacional" />
      </div>
      </footer>
    )
}

export default Footer;