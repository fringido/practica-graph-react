import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { InfoPokemon } from "./ContainerPokemons/InfoPoquemon";
import { ContainerPokemons } from "./ContainerPokemons";

const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<ContainerPokemons />} />
          <Route path="/pokemon/:id" element={<InfoPokemon />} />
          {/* <Route path="/*" element={<ErrorPage />} /> */}
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
