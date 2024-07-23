import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EgeMain from './EgeMain/EgeMain.js';
import EgeMaterials from './EgeMaterials/EgeMaterials.js';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<EgeMain/>} />
        <Route path="/materials/*" element={<EgeMaterials/>} />

      </Routes>
    </Router>
  );
}

export default App;
