import axios from 'axios';
import { AuthInfo } from '../app/modules/auth/types';

const fetchUser = axios.create({
  baseURL: 'http://localhost:5000/api/v1/auth',
});

const userService = {
  async auth(token: string): Promise<AuthInfo> {
    const { data } = await fetchUser({
      method: 'POST',
      data: { token },
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
  async logout(payload: object): Promise<void> {
    const { data } = await fetchUser({
      method: 'POST',
      url: '/logout',
      data: payload,
    });

    return data;
  },
  async checkEmail(payload: Partial<AuthInfo>): Promise<object> {
    const res = await fetchUser({
      method: 'POST',
      url: '/emails',
      data: payload,
      timeout: 800,
    });

    return res;
  },
};

export default userService;
