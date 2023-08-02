import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from './redux/books/booksSlice';
import Button from './components/Button';
import Book from './components/Book';

function App() {
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

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div className="App">
      <h1>Bookstore</h1>
      <div>
        {books.map((book) => (
          <div key={book.item_id}>
            <Book book={book} />
            <Button type="button" onClick={() => handleRemoveBook(book.item_id)} text="Remove Book" />
          </div>
        ))}
      </div>
      <Button type="button" onClick={handleAddBook} text="Add Book" />
    </div>
  );
}

export default App;
