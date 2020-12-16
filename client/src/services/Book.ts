import { BookInfo } from '../redux/modules/book/types';
import axios from 'axios';

axios.defaults.baseURL = '/api/v1';

class BookService {
  public static async get(): BookInfo[] {
    const data = await axios({
      method: 'GET',
      url: '/books',
    });
  }
  // public static add(): BookInfo[] {
  //   return {}
  // }
  // public static update(): BookInfo[] {
  //   return {}
  // }
  // public static remove(): BookInfo[] {
  //   return {}
  // }
}

export default BookService;
