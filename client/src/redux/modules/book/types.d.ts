import { ADD_BOOK_SUCCESS, FAIL, GET_BOOKS_SUCCESS, START } from './actions';

// Book Level State
export interface BookState {
  loading: boolean;
  books: BookInfo[];
  error: null;
}
// Book Entities
export interface BookInfo {
  _id: string;
  title: string;
  author: string;
  owner: object;
  isOpen?: boolean;
  imgURL?: string;
  imgAlt?: string;
  description?: string;
}

// actions object type
interface Start extends Action {
  type: typeof START;
}

interface Fail extends Action {
  type: typeof FAIL;
  payload?: error;
}

interface GetBooksSuccess extends Action {
  type: typeof GET_BOOKS_SUCCESS;
  payload: BookInfo[];
}
interface AddBookSuccess extends Action {
  type: typeof ADD_BOOK_SUCCESS;
  payload: BookInfo[];
}
interface UpdateBookSuccess extends Action {
  type: typeof UPDATE_BOOK;
  payload: BookInfo;
}
interface DeleteBookSuccess extends Action {
  type: typeof DELETE_BOOK;
}

export type BookActionTypes =
  | Start
  | Fail
  | GetBooksSuccess
  | AddBookSuccess
  | UpdateBookSuccess
  | DeleteBookSuccess;
