import React from 'react';

/* eslint-disable */
const Book = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>
        Author:
        {book.author}
      </p>
      <p>
        Category:
        {book.category}
      </p>
    </div>
  );
};

export default Book;
