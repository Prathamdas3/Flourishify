import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/landingPage';
import Navbar from './components/Navbar';
import AIPage from './Pages/aiPage';
import TodoPage from './Pages/TodoPage';
import NotePage from './Pages/NotePage';
import GamePage from './Pages/gamePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/todo" element={<TodoPage />} />
        <Route exact path="/note" element={<NotePage />} />
        <Route exact path="/ai" element={<AIPage />} />
        <Route exact path="/games" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
