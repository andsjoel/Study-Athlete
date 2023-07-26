// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useNavigate();

  const handleLogin = () => {
    // Simulação de dados de usuário
    const mockUsername = 'usuariodemo';
    const mockPassword = 'senhademo';

    if (username.length >= 6 && password.length >= 6) {
      if (username === mockUsername) {
        if (password === mockPassword) {
          // Lógica para lidar com o login bem-sucedido
          setErrorMessage('');
          history('/profile');
        } else {
          // Senha inválida
          setErrorMessage('Senha inválida.');
          setPassword('');
        }
      } else {
        // Usuário não encontrado
        setErrorMessage('Usuário não encontrado.');
        setUsername('');
      }
    } else {
      // Usuário e/ou senha com menos de 6 caracteres
      setErrorMessage('Mínimo 6 caracteres');
    }
  };

  return (
    <div className="login-form">
      <input
        type="text"
        placeholder={errorMessage ? 'Usuário não encontrado' : 'Usuário'}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onClick={() => setErrorMessage('')}
      />
      <input
        type="password"
        placeholder={errorMessage ? 'Senha inválida' : 'Senha'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onClick={() => setErrorMessage('')}
      />
      <button disabled={username.length < 6 || password.length < 6} onClick={handleLogin}>
        Entrar
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default LoginForm;
