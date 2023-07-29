import React, { useState } from 'react';

/* eslint-disable */
const BookForm = ({ addBookItem }) => {
  const [title, setTitle] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBookItem(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Todo..."
       value={title}
       onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};

export default BookForm;


  