import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../Home/Home.js'
import Reservas from '../Reservas/Reservas'
import Menu from '../Menu/Menu.js'
import { Consumo } from "../Consumo/Consumo";

export function Rutas() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path="/" element={<Consumo />} />
        <Route path="Home" element={<Home />} />
        <Route path="reservas" element={<Reservas />} />
      </Routes>
    </div>
  );
}

