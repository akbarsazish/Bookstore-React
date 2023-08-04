/* eslint-disable */
import axios from 'axios';

var app_id = 'MPx9jJpTzEbmYGTmthk9';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${app_id}/books`;

export const createNewApp = async () => {
  try {
    const response = await axios.post(`${baseUrl}`);
    return response.data;
  } catch (error) {
    console.error('Error creating a new app:', error);
    return null;
  }
};

export const getAllBooksForApp = async (baseUrl) => {
  try {
    const response = await axios.get(`${baseUrl}`);
    return response.data;
  } catch (error) {
    console.error('Error getting all books for the app:', error);
    return null;
  }
};

export const createNewBookForApp = async (baseUrl, bookData) => {
  try {
    const response = await axios.post(`${baseUrl}`, bookData);
    return response.data;
  } catch (error) {
    console.error('Error creating a new book:', error);
    return null;
  }
};

export const deleteBookForApp = async (baseUrl, item_id) => {
  try {
    const response = await axios.delete(`${baseUrl}${item_id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting the book:', error);
    return null;
  }
};
