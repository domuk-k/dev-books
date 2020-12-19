import axios from 'axios';
import { AuthInfo } from '../app/modules/auth/types';

axios.defaults.baseURL = 'http://localhost:5000/api/v1/auth';

class UserService {
  public static async auth(): Promise<AuthInfo> {
    const { data } = await axios({
      method: 'POST',
    });
    return data;
  }
  public static async login(payload: object): Promise<AuthInfo> {
    const { data } = await axios({
      method: 'POST',
      data: payload,
    });
    return data;
  }
  public static async logout(): Promise<object> {
    const { data } = await axios({
      method: 'PATCH',
    });
    return data;
  }
  public static async checkEmail(): Promise<void> {
    await axios({
      method: 'DELETE',
    });
  }
}

export default UserService;
