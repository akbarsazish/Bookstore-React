import React, { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

const BookLogic = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      author: 'Ali',
    },
    {
      id: 2,
      title: 'Develop website and add content',
      author: 'Jhon',
    },
    {
      id: 3,
      title: 'Deploy to live server',
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
      completed: "ABC",
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
