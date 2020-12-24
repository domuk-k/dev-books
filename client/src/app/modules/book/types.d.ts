import { Action } from 'redux';
import {
  ADD_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
  FAIL,
  GET_BOOKS_SUCCESS,
  START,
  UPDATE_BOOK_SUCCESS,
} from './actions';

// Book Level State
export interface BookState {
  loading: boolean;
  books: Partial<BookInfo>[];
  error: null | Error;
}
// Book Entities
export interface BookInfo {
  _id: string;
  title: string;
  author: string;
  owner: string;
  isPrivate?: boolean;
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
  payload: null | Error;
}

interface GetBooksSuccess extends Action {
  type: typeof GET_BOOKS_SUCCESS;
  payload: BookInfo[];
}
interface AddBookSuccess extends Action {
  type: typeof ADD_BOOK_SUCCESS;
  payload: Partial<BookInfo>;
}
interface UpdateBookSuccess extends Action {
  type: typeof UPDATE_BOOK_SUCCESS;
  payload: BookInfo;
}
interface DeleteBookSuccess extends Action {
  type: typeof DELETE_BOOK_SUCCESS;
}

export type BookActionTypes =
  | Start
  | Fail
  | GetBooksSuccess
  | AddBookSuccess
  | UpdateBookSuccess
  | DeleteBookSuccess;
