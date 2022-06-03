import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from '../Home/Home.js'
import Reservas from '../Reservas/Reservas'
import Menu from '../Menu/Menu.js'

export function Rutas() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reservas" element={<Reservas />} />
      </Routes>
    </div>
  );
}

