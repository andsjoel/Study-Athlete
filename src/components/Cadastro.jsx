import React, { useState } from 'react';
import '../styles/Cadastro.css'

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    idade: '',
    genero: '',
    email: '',
    usuario: '',
    senha: '',
    confirmarSenha: '',
    confirmarSenhaErro: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, confirmarSenhaErro: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      setFormData({ ...formData, confirmarSenhaErro: true });
      return;
    }

    // Aqui você pode implementar a lógica para enviar os dados para o backend
    alert(
      'Este é um site ilustrativo, não é possível cadastrar um usuário. Agradeço pela visita!'
    );
  };

  return (
    <div className="cadastro-screen">
      <h2>Cadastro</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Nome"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleInputChange}
            placeholder="Sobrenome"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="idade"
            value={formData.idade}
            onChange={handleInputChange}
            placeholder="Idade"
            required
          />
        </div>

        <div className="form-group">
          <select name="genero" value={formData.genero} onChange={handleInputChange} required>
            <option value="">Gênero</option>
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
            <option value="outro">Outro</option>
            <option value="naoInformar">Não Informar</option>
          </select>
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={handleInputChange}
            placeholder="Usuário"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleInputChange}
            placeholder="Senha"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleInputChange}
            placeholder="Confirmar Senha"
            required
          />
          {formData.confirmarSenhaErro && <p className="error">As senhas não conferem.</p>}
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
