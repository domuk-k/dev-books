import { AUTH_FAIL, AUTH_START } from './actions';

// Auth Level State
export interface AuthState {
  loading: boolean;
  user: AuthInfo | null;
  error: null | Error;
  emailChecked: boolean | null;
  checkingEmail: boolean | null;
}

// User Entities
export interface AuthInfo {
  _id: string;
  email: string;
  password: string;
  username?: string;
  profile_img?: string;
  marked_books?: object[];
  done_books?: object[];
  token?: string;
}

// actions object type
interface AuthStart extends Action {
  type: typeof AUTH_START;
}

interface AuthFail extends Action {
  type: typeof AUTH_FAIL;
  payload: null | Error;
}

interface AuthSuccess extends Action {
  type: typeof AUTH_SUCCESS;
  payload: UserInfo;
}

interface EmailCheckSuccess extends Action {
  type: typeof EMAIL_CHECK_SUCCESS;
  payload: UserInfo;
}

interface LoginSuccess extends Action {
  type: typeof LOGIN_SUCCESS;
  payload: UserInfo;
}

interface LogoutSuccess extends Action {
  type: typeof LOGOUT_SUCCESS;
}

export type AuthActionTypes =
  | Start
  | Fail
  | AuthSuccess
  | EmailCheckSuccess
  | LoginSuccess
  | LogoutSuccess;
