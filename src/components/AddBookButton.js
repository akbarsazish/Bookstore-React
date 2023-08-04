import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBookButton = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleAddBook = () => {
    if (!title || !author) {
      return;
    }
    const newBook = {
      item_id: `item${Date.now()}`,
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const categories = [
    { label: 'Fiction', value: 'Fiction' },
    { label: 'Nonfiction', value: 'Nonfiction' },
    { label: 'Science Fiction', value: 'Science Fiction' },
    { label: 'Mystery', value: 'Mystery' },
    { label: 'Fantasy', value: 'Fantasy' },
    { label: 'Romance', value: 'Romance' },
  ];

  return (
    <div>
      <input
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        id="author"
        label="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <div>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>
      <button className="add-btn" type="button" onClick={handleAddBook}> Add Book </button>
    </div>
  );
};

export default AddBookButton;
