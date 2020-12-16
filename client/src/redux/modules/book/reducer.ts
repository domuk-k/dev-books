/* eslint-disable import/no-anonymous-default-export */
// actions
// action creators
// reducer

import { GET_BOOKS, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK } from './actions';
import { BookActionTypes, BookState, GetBooksAction } from './types';

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
        books: (action as GetBooksAction).payload,
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
