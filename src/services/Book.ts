import { Book } from '../redux/modules/book/types';

const fakeBook: Book = {
  _id: '123',
  title: 'abc',
  author: 'Boris Cherny',
  owner: {},
};

class BookService {
  public static fetch(): Book[] {
    return new Array(3).fill(null).map(_ => fakeBook);
  }
}

export default BookService;
