import React from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
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
        <Button buttonClass="remove-btn" onClick={() => handleRemoveBook(book.item_id)} text="Remove" />
      </div>
      <div className="book-store-item">
        <button className="update-btn"> Update In progresss </button>
      </div>
    </div>
  );
};

export default Book;
