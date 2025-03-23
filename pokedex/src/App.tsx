// AppRoutes.tsx (or Root.tsx)
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Pokedex from "./Pages/Pokedex";
import UniqueCards from "./Pages/UniqueCards";
import Navigation from "./Components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:pokemonName" element={<UniqueCards />} />
      </Routes>
    </>
  );
};

export default App;
