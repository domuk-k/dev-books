// actions
export const GET_BOOKS = 'GET_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';

export interface Book {
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
interface GetBooksAction {
  type: typeof GET_BOOKS;
  payload: Book[];
}
interface AddBookAction {
  type: typeof ADD_BOOK;
  payload: Book;
}
interface UpdateBookAction {
  type: typeof UPDATE_BOOK;
  payload: Partial<Book>;
}
interface DeleteBookAction {
  type: typeof DELETE_BOOK;
  payload: {
    _id: string;
  };
}

export interface BookState {
  loading: boolean;
  books: Book[];
  error: Error | null;
}

export type BookActionTypes =
  | AddBookAction
  | UpdateBookAction
  | GetBooksAction
  | DeleteBookAction;
