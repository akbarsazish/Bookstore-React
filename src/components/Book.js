import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

/* eslint-disable */
const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div className="book-store">
      <div className="book-store-item">
        {book.category}
        <h4 className="book-title">{book.title}</h4>
        {book.author}
        <button className="remove-btn" onClick={() => handleRemoveBook(book.item_id)}> remove </button>
      </div>
      <div className="book-store-item">
        <button className="update-btn"> Update In progresss </button>
      </div>
    </div>
  );
};

export default Book;
