import { ActionCreator } from 'redux';
import { AuthActionTypes, AuthInfo } from './types';

export const AUTH_START = 'AUTH_START';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const EMAIL_CHECK_START = 'EMAIL_CHECK_START';
export const EMAIL_CHECK_SUCCESS = 'EMAIL_CHECK_SUCCESS';
export const EMAIL_CHECK_FAIL = 'EMAIL_CHECK_FAIL';
export const EMAIL_CHECK_ERROR = 'EMAIL_CHECK_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

type UserActionCreator = ActionCreator<AuthActionTypes>;

export const authStart: UserActionCreator = () => ({
  type: AUTH_START,
});
export const authFail: UserActionCreator = (error: unknown) => ({
  type: AUTH_FAIL,
  payload: error,
});
export const authSuccess: UserActionCreator = (user: AuthInfo) => ({
  type: AUTH_SUCCESS,
  payload: user,
});

export const emailCheckStart: UserActionCreator = () => ({
  type: EMAIL_CHECK_START,
});

export const emailCheckSuccess: UserActionCreator = () => ({
  type: EMAIL_CHECK_SUCCESS,
});

export const emailCheckFail: UserActionCreator = () => ({
  type: EMAIL_CHECK_FAIL,
});

export const emailCheckError: UserActionCreator = () => ({
  type: EMAIL_CHECK_ERROR,
});

export const loginSuccess: UserActionCreator = (user: AuthInfo) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout: UserActionCreator = () => ({
  type: LOGOUT,
});
