import { ActionCreator } from 'redux';
import { AuthActionTypes, AuthInfo } from './types';

export const AUTH_START = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_SUCCESS';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const EMAIL_CHECK_SUCCESS = 'EMAIL_CHECK_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

type UserActionCreator = ActionCreator<AuthActionTypes>;

export const authStart: UserActionCreator = () => ({
  type: AUTH_SUCCESS,
});
export const authFail: UserActionCreator = (user: AuthInfo) => ({
  type: AUTH_SUCCESS,
  payload: user,
});
export const authSuccess: UserActionCreator = (token: string) => ({
  type: AUTH_SUCCESS,
  payload: token,
});

export const emailCheckSuccess: UserActionCreator = (user: AuthInfo) => ({
  type: AUTH_SUCCESS,
  payload: user,
});

export const loginSuccess: UserActionCreator = (user: AuthInfo) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logoutSuccess: UserActionCreator = () => ({
  type: LOGOUT_SUCCESS,
});
