import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBookButton from './AddBookButton';

const BookContainer = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <div>
      {books.map((book) => (
        <div key={book.item_id}>
          <Book book={book} />
        </div>
      ))}
      <AddBookButton />
    </div>
  );
};

export default BookContainer;
