/* eslint-disable import/no-anonymous-default-export */
// actions
// action creators
// reducer

import {
  ADD_BOOK,
  BookActionTypes,
  BookState,
  DELETE_BOOK,
  GET_BOOKS,
  UPDATE_BOOK,
} from './types';

const initialState: BookState = {
  loading: false,
  books: [],
  error: null,
};

export default (state = initialState, action: BookActionTypes): BookState => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: [...state.books, ...action.payload],
      };
    case ADD_BOOK:
      return state;
    case UPDATE_BOOK:
      return state;
    case DELETE_BOOK:
      return state;
    default:
      return state;
  }
};
