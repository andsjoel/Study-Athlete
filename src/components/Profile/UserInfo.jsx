import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "../../styles/ProfileStyle/UserInfo.css"

const UserInfo = ({ user, onEdit }) => {
  return (
    <div className="user-profile">
      <div className="edit-icon" onClick={onEdit}>
      <h2>Perfil do Atleta</h2>
      <FontAwesomeIcon icon={faGear} className="edit-button" />
      </div>
      <p>
        Nome:</p> <strong>{user.nome} {user.sobrenome}</strong>
      
      <p>
        Idade:</p> <strong>{user.idade}</strong>
      
      <p>
        Gênero:</p> <strong>{user.genero}</strong>
      
      <p>
        Email:</p> <strong>{user.email}</strong>
    </div>
  );
};

export default UserInfo;
