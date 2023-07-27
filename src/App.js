import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import { UserProvider } from './contexts/UserContext';
import RoutineContextProvider from './contexts/RotinasContext';
import Home from "./pages/Home";
import WelcomePage from "./pages/WelcomePage";
import Profile from "./pages/Profile";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <RoutineContextProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/welcome" element={ <WelcomePage /> } />
              <Route path="/profile" element={ <Profile /> } />
            </Routes>
          </HashRouter>
        </RoutineContextProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
