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
  async search(query?: string): Promise<object> {
    const { data } = await axios({
      method: 'GET',
      url: `https://dapi.kakao.com/v3/search/book?query=${query}`,
      headers: {
        Authorization: `KakaoAK c564052ebc2015f97c74804dc1a47221`,
      },
    });
    return data;
  },
  async add(payload: Partial<BookInfo>): Promise<BookInfo> {
    const { data } = await fetchBook({
      method: 'POST',
      data: payload,
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
