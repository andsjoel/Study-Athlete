import React from 'react';
import '../styles/Home.css'
import LoginForm from "../components/LoginForm";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-text">
        <div>
          <div><h2 className="study">Study</h2><h2 className="athlete">Athlete</h2></div>
          <p className="homescreen-text">ACESSE SUA ROTINA</p>
          <p className="homescreen-text">OU CONHEÇA NOSSO SITE</p>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
      <Link to="/welcome" className='link-to-welcome'>
        <div className="scroll-down-button">
          <span>Conheça nosso site</span>
        </div>
      </Link>
    </div>
  );
}

export default Home;
