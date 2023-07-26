import React, { useState } from 'react';
import "../../styles/ProfileStyle/UserInfo.css"

const EditInfo = ({ user, onSave }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSaveChanges = () => {
    onSave(editedUser);
  };

  return (
    <div className="edit-profile user-profile">
      <div className="buttons">
        <h2>Editar Perfil</h2>
        <button className='edit-button' type="button" onClick={handleSaveChanges}>
          OK
        </button>
        {/* Adicione um botão para cancelar a edição, caso necessário */}
      </div>

      <div className="form-edit">
        <p>Nome:</p>
        <label htmlFor="nome"></label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={editedUser.nome}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-edit">
      <p>Sobrenome:</p>
        <label htmlFor="sobrenome"></label>
        <input
          type="text"
          id="sobrenome"
          name="sobrenome"
          value={editedUser.sobrenome}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-edit">
        <p>Idade:</p>
        <label htmlFor="idade"></label>
        <input
          type="number"
          id="idade"
          name="idade"
          value={editedUser.idade}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-edit">
        <p>Gênero:</p>
        <label htmlFor="genero"></label>
        <select id="genero" name="genero" value={editedUser.genero} onChange={handleInputChange}>
          <option value="">Gênero</option>
          <option value="feminino">Feminino</option>
          <option value="masculino">Masculino</option>
          <option value="outro">Outro</option>
          <option value="naoInformar">Não Informar</option>
        </select>
      </div>
    </div>
  );
};

export default EditInfo;