import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Search from './components/Search';
import HouseChart from './components/HouseChart';
import "./style.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/houses" element={<HouseChart />}></Route>
      </Routes >
    </div>
  );
}

export default App;
