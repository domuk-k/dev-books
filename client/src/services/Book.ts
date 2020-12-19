import { BookInfo } from '../app/modules/book/types';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/v1/book';

class BookService {
  public static async get(): Promise<BookInfo[]> {
    const { data } = await axios({
      method: 'GET',
    });
    return data;
  }
  public static async add(): Promise<BookInfo> {
    const { data } = await axios({
      method: 'POST',
    });
    return data;
  }
  public static async update(bookId: string): Promise<object> {
    const { data } = await axios({
      method: 'PATCH',
      url: `/${bookId}`,
    });
    return data;
  }
  public static async remove(): Promise<void> {
    await axios({
      method: 'DELETE',
    });
  }
}

export default BookService;
