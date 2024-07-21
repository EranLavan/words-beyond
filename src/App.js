import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EgeMain from './EgeMain/EgeMain.js';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<EgeMain/>} />

      </Routes>
    </Router>
  );
}

export default App;
