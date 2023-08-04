import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBookButton from './AddBookButton';
import { fetchBooks } from '../redux/books/booksSlice';

/* eslint-disable */
const BookContainer = ({ app_id }) => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(app_id));
  }, [dispatch, app_id]);

  return (
    <div className="container">
      {books.map((book) => (
        <div key={book.item_id}>
          <Book book={book} />
        </div>
      ))}
      <div className="part-devider"></div>
      <AddBookButton app_id={app_id} />
    </div>
  );
};

export default BookContainer;
