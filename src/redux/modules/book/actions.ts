import {
  ADD_BOOK,
  Book,
  BookActionTypes,
  DELETE_BOOK,
  GET_BOOKS,
  UPDATE_BOOK,
} from './types';

export function addBooks(book: Book): BookActionTypes {
  return {
    type: ADD_BOOK,
    payload: book,
  };
}
export function getBooks(book: Book[]): BookActionTypes {
  return {
    type: GET_BOOKS,
    payload: [{ _id: '123', title: 'abc', author: 'Boris Cherny', owner: {} }],
  };
}
export function updateBooks(book: Book): BookActionTypes {
  return {
    type: UPDATE_BOOK,
    payload: book,
  };
}
export function deleteBooks(book: Book): BookActionTypes {
  return {
    type: DELETE_BOOK,
    payload: book,
  };
}
