import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import './App.scss'
import { ContainerPokemons } from './ContainerPokemons';
import { InfoPokemon } from './ContainerPokemons/InfoPoquemon';

function App() {

  return (
    <BrowserRouter>
      <Routes>
            <Route path="/:pokemon" element={<InfoPokemon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

