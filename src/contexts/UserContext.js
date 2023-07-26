import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Mock das informações do usuário (substitua por dados reais)
  const mockUser = {
    nome: 'Pedro',
    sobrenome: 'Barcelos',
    idade: 15,
    genero: 'Masculino',
    email: 'pedrin@hype.com',
  };

  const [user, setUser] = useState(mockUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };