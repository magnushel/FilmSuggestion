import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Homepage/Home';
import FindYourMovie from './FindYourMoviePage/FindYourMovie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-your-movie" element={<FindYourMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
