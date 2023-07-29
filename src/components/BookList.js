import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

/* eslint-disable */
const BookList = ({ booksProps, setBooks, delBook }) => {
  return (
    <ul>
      {booksProps.map((book) => (
        <BookItem key={book.id} itemProp={book} setBooks={setBooks}  delBook={delBook}/>
      ))}
    </ul>
  );
};

BookList.propTypes = {
  booksProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
