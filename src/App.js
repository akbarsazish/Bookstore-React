import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
