import React, { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

const BookLogic = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Java',
      author: 'Ali',
    },
    {
      id: 2,
      title: 'JavaScript',
      author: 'Jhon',
    },
    {
      id: 3,
      title: 'PHP',
      author: 'foo',
    },
  ]);

  /* eslint-disable */
  const delBook = (id) => {
    setBooks([
      ...books.filter((book) => {
        return book.id !== id;
      }),
    ]);
  };

  const addBookItem = (title) => {
    const newBook = {
      id: 4,
      title: title,
      author: "ABC",
    };
    setBooks([...books, newBook]);
  };

  return (
    <>
      <BookForm addBookItem={addBookItem} />
      <BookList booksProps={books} setBooks={setBooks} delBook={delBook} />
    </>
  );
};
export default BookLogic;
