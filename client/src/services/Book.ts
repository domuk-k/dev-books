import { BookInfo } from '../app/modules/book/types';
import axios from 'axios';

const fetchBook = axios.create({
  baseURL: 'http://localhost:5000/api/v1/book',
});

const bookService = {
  async get(): Promise<BookInfo[]> {
    const { data } = await fetchBook({
      method: 'GET',
    });
    return data;
  },
  async add(): Promise<BookInfo> {
    const { data } = await fetchBook({
      method: 'POST',
    });
    return data;
  },
  async update(bookId: string): Promise<object> {
    const { data } = await fetchBook({
      method: 'PATCH',
      url: `/${bookId}`,
    });
    return data;
  },
  async remove(): Promise<void> {
    await fetchBook({
      method: 'DELETE',
    });
  },
};

export default bookService;
