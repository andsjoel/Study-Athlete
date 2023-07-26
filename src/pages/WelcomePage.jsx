import React, { useState } from "react"
import BemVindo from "../components/BemVindo";
import Treinos from "../components/Treinos";
import Rotina from "../components/Rotina";
import Cadastro from "../components/Cadastro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faDumbbell, faClock, faUser, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/Abas.css"

const WelcomePage = () => {
  const [activePage, setActivePage] = useState('inicial');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'inicial':
        return <BemVindo />;
      case 'treinos':
        return <Treinos />;
      case 'rotina':
        return <Rotina />;
      case 'cadastro':
        return <Cadastro />;
        case 'home':
          return window.location.replace('/');
      default:
        return <BemVindo />
    }
  };

  return (
    <div className="content-home">
      <div className="abas">
        <ul>
          <li
            className={activePage === 'inicial' ? 'active' : ''}
            onClick={() => handlePageChange('inicial')}
          >
            <FontAwesomeIcon icon={faHome} className="icons" />
            <p>Início</p>
          </li>
          <li
            className={activePage === 'treinos' ? 'active' : ''}
            onClick={() => handlePageChange('treinos')}
          >
            <FontAwesomeIcon icon={faDumbbell} className="icons" />
            <p>Treinos</p>
          </li>
          <li
          className={activePage === 'rotina' ? 'active' : ''}
            onClick={() => handlePageChange('rotina')}
          >
            <FontAwesomeIcon icon={faClock} className="icons" />
            <p>Rotina</p>
          </li>
          <li
            className={activePage === 'cadastro' ? 'active' : ''}
            onClick={() => handlePageChange('cadastro')}
          >
            <FontAwesomeIcon icon={faUser} className="icons"/>
            <p>Cadastro</p>
          </li>
          <li
            className={activePage === 'home' ? 'active' : ''}
            onClick={() => handlePageChange('home')}
          >
            <FontAwesomeIcon icon={faRotateLeft} className="icons"/>
            <p>Home</p>
          </li>
        </ul>
      </div>
      <main>{ renderContent() }</main>
    </div>
  );
}

export default WelcomePage;
