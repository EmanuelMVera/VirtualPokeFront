import React from "react";
import { Route, Routes } from "react-router-dom";

import Intro from "./components/intro/Intro";
import Home from "./components/home/Home";
import Create from "./components/create/Create";
import Detail from "./components/detail/Detail";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/detail/:idPokemon" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
