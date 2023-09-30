import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AIPage from './Pages/ai';

function App() {
  return (
    <Routes>
      <Route exact path="/ai" element={<AIPage />} />
    </Routes>
  );
}

export default App;
