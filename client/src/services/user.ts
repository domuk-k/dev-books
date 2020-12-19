import axios from 'axios';
import { AuthInfo } from '../app/modules/auth/types';

const fetchUser = axios.create({
  baseURL: 'http://localhost:5000/api/v1/auth',
});

const userService = {
  async auth(): Promise<AuthInfo> {
    const { data } = await fetchUser({
      method: 'POST',
    });
    return data;
  },
  async login(payload: Partial<AuthInfo>): Promise<AuthInfo> {
    const { data } = await fetchUser({
      method: 'POST',
      url: '/login',
      data: payload,
    });

    return data;
  },
  async logout(): Promise<void> {
    throw new Error('not implemented yet');
  },
  async checkEmail(payload: Partial<AuthInfo>): Promise<object> {
    const res = await fetchUser({
      method: 'POST',
      url: '/emails',
      data: payload,
    });
    console.log(res);

    return res;
  },
};

export default userService;
