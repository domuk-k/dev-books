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
interface GetBooksAction extends Action {
  type: typeof GET_BOOKS;
  payload: BookInfo[];
}
interface AddBookAction extends Action {
  type: typeof ADD_BOOK;
  payload: BookInfo;
}
interface UpdateBookAction extends Action {
  type: typeof UPDATE_BOOK;
  payload: Partial<BookInfo>;
}
interface DeleteBookAction extends Action {
  type: typeof DELETE_BOOK;
  payload: {
    _id: string;
  };
}

export type BookActionTypes =
  | AddBookAction
  | UpdateBookAction
  | GetBooksAction
  | DeleteBookAction;
