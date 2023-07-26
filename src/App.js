import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/welcome" element={ <WelcomePage /> } />
              <Route path="/profile" element={ <Profile /> } />
            </Routes>
          </BrowserRouter>
        </RoutineContextProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
