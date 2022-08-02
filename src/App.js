import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPokemon, getTypes, getPokemonById } from "./redux/actions/index";
import { Route, Routes, useParams } from "react-router-dom";

import Intro from "./components/intro/Intro";
import Home from "./components/home/Home";
import Create from "./components/create/Create";
import Detail from "./components/detail/Detail";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemon());
    dispatch(getTypes());
  }, [dispatch]);

  function PokemonById() {
    let { idPokemon } = useParams();
    dispatch(getPokemonById(idPokemon));
    return <Detail />;
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/detail/:idPokemon" element={<PokemonById />} />
      </Routes>
    </div>
  );
}

export default App;
