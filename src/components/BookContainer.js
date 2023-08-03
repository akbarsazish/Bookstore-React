import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import Book from './Book';
import Button from './Button';

const BookContainer = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      item_id: `item${books.length + 1}`,
      title: 'New Book Title',
      author: 'New Author Name',
      category: 'Fiction',
    };
    dispatch(addBook(newBook));
  };

  return (
    <div>
      {books.map((book) => (
        <div key={book.item_id}>
          <Book book={book} />
        </div>
      ))}
      <Button type="button" onClick={handleAddBook} text="Add Book" />
    </div>
  );
};

export default BookContainer;
