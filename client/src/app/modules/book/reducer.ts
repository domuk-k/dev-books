import {
  ADD_BOOK_SUCCESS,
  FAIL,
  GET_BOOKS_SUCCESS,
  START,
  UPDATE_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
} from './actions';
import {
  BookState,
  BookActionTypes,
  Fail,
  AddBookSuccess,
  GetBooksSuccess,
} from './types';

const initialState: BookState = {
  loading: false,
  books: [],
  error: null,
};

export default (state = initialState, action: BookActionTypes): BookState => {
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
      };
    case FAIL:
      return {
        ...state,
        error: (action as Fail).payload,
      };
    case GET_BOOKS_SUCCESS:
      return { ...state, books: (action as GetBooksSuccess).payload };
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        books: [...state.books, (action as AddBookSuccess).payload],
      };
    case UPDATE_BOOK_SUCCESS:
      return state;
    case DELETE_BOOK_SUCCESS:
      return state;
    default:
      return state;
  }
};
