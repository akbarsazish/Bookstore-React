import React from 'react';
import './assets/style.css';
import Navigation from './Navigation';
import BookLogic from './BookLogic';

/* eslint-disable */
const Book = () => {
  return (
    <div className="container">
      <Navigation />
      <BookLogic />
    </div>
  );
};

export default Book;
