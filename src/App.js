import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './components/assets/style.css';
import Category from './components/Category';
import BookContainer from './components/BookContainer';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/Bookstore-React" element={<BookContainer />} />
        <Route path="/categories/Bookstore-React" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
