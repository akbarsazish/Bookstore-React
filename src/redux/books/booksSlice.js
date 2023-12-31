import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import formattedBookObject from '../../helpers/dataApiFormatted';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MPx9jJpTzEbmYGTmthk9/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios(`${baseURL}`);
    return response.data || [];
  } catch (error) {
    return 'Something went wrong. Try again refreshing the page.';
  }
});

export const addBookToApi = createAsyncThunk('books/addBookToApi', async (book) => {
  try {
    const response = await axios.post(`${baseURL}`, book);
    return response.data === 'Created' ? book : null;
  } catch (error) {
    return 'Request failed! The book was not saved. Try Again.';
  }
});

export const removeBookFromApi = createAsyncThunk('books/removeBookFromApi', async (bookId) => {
  try {
    const response = await axios.delete(`${baseURL}/${bookId}`);
    return response.data === 'The book was deleted successfully!' ? bookId : null;
  } catch (error) {
    return 'Request failed!. The book was not removed. Try Again.';
  }
});

const initialState = {
  books: [],
  isLoading: true,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // reducer for fetchBooks action
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;

        if (typeof action.payload === 'string') {
          state.error = action.payload;
          return;
        }

        const formattedDataBooks = Object.keys(action.payload)
          .map((key) => formattedBookObject(action.payload[key], key));
        state.books = [...formattedDataBooks];
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
    // reducer for addBook action
      .addCase(addBookToApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBookToApi.fulfilled, (state, action) => {
        state.isLoading = false;

        if (typeof action.payload === 'string') {
          state.error = action.payload;
          return;
        }

        state.books.push(action.payload);
      })
      .addCase(addBookToApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
    // reducer for removeBook action
      .addCase(removeBookFromApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBookFromApi.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.payload) {
          state.books = state.books.filter((book) => book.item_id !== action.payload);
        }
      })
      .addCase(removeBookFromApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
