import { ActionCreator } from 'redux';
import { BookInfo, BookActionTypes } from './types';

const prefix = 'devooks/books/';
// actions
export const START = `${prefix}START`;
export const FAIL = `${prefix}FAIL`;
export const GET_BOOKS_SUCCESS = `${prefix}GET_BOOKS_SUCCESS`;
export const ADD_BOOK_SUCCESS = `${prefix}ADD_BOOK_SUCCESS`;
export const UPDATE_BOOK_SUCCESS = `${prefix}UPDATE_BOOK_SUCCESS`;
export const DELETE_BOOK_SUCCESS = `${prefix}DELETE_BOOK_SUCCESS`;

type BookActionCreator = ActionCreator<BookActionTypes>;

export const start: BookActionCreator = () => {
  return {
    type: START,
  };
};

export const fail: BookActionCreator = error => {
  return {
    type: FAIL,
    payload: { error },
  };
};

export const getBooksSuccess: BookActionCreator = (books: BookInfo[]) => {
  return {
    type: GET_BOOKS_SUCCESS,
    payload: { books },
  };
};
export const addBooksSuccess: BookActionCreator = (books: BookInfo[]) => {
  return {
    type: ADD_BOOK_SUCCESS,
    payload: { books },
  };
};
export const updateBooksSuccess: BookActionCreator = (book: BookInfo) => {
  return {
    type: UPDATE_BOOK_SUCCESS,
    payload: { book },
  };
};
export const deleteBooksSuccess: BookActionCreator = () => {
  return {
    type: DELETE_BOOK_SUCCESS,
  };
};
