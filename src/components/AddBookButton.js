import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookToApi } from '../redux/books/booksSlice';
import BookForm from './BookForm';

/* eslint-disable */
const AddBookButton = ({ app_id }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handleAddBook = async () => {
    if (!title || !author) {
      return;
    }

    const newBookData = {
      item_id: `item${Date.now()}`,
      title,
      author,
      category,
    };

    try {
      const response = await createNewBookForApp(app_id, newBookData);
      if (response === 'Created') {
        dispatch(addBookToApi(newBookData));
        setTitle('');
        setAuthor('');
        setCategory('');
      }
    } catch (error) {
      setError('Failed to add the book. Please try again later.');
    }
  };
  return (
    <div>
     <BookForm />
    </div>
  );
};

export default AddBookButton;
