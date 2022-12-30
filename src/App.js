import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Originals from "./components/Originals";
import Series from "./components/Series";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/originals" element={<Originals />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detail/:name" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
