import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Book from './components/Book';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
