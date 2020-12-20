import UserService from './user';
import BookService from './book';
import StorageService from './storage';

const service = {
  user: UserService,
  book: BookService,
  storage: StorageService,
};

export default service;
