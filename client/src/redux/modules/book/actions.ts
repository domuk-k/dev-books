import { ActionCreator } from 'redux';
import { BookInfo, BookActionTypes, AddBookAction } from './types';

const prefix = 'devooks/books/';
// actions
export const GET_BOOKS = `${prefix}GET_BOOKS`;
export const ADD_BOOK = `${prefix}ADD_BOOK`;
export const UPDATE_BOOK = `${prefix}UPDATE_BOOK`;
export const DELETE_BOOK = `${prefix}DELETE_BOOK`;

export const addBook: ActionCreator<AddBookAction> = (book: BookInfo) => {
  return {
    type: typeof ADD_BOOK,
    payload: book,
  };
};
export const getBooks: ActionCreator<BookActionTypes> = (books: BookInfo[]) => {
  return {
    type: GET_BOOKS,
    payload: books,
  };
};
export const updateBooks: ActionCreator<BookActionTypes> = (book: BookInfo) => {
  return {
    type: UPDATE_BOOK,
    payload: book,
  };
};
export const deleteBooks: ActionCreator<BookActionTypes> = (book: BookInfo) => {
  return {
    type: DELETE_BOOK,
    payload: book,
  };
};
