import {
  AUTH_FAIL,
  AUTH_START,
  AUTH_SUCCESS,
  EMAIL_CHECK_START,
  EMAIL_CHECK_FAIL,
  EMAIL_CHECK_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  EMAIL_CHECK_ERROR,
} from './actions';
import { AuthActionTypes, AuthState } from './types';

export enum emailCheckState {
  DEFAULT = 'DEFAULT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
  ERROR = 'ERROR',
}

// loading 또는 api 요청 결과가 그자체가 실패일경우..
const initialState: AuthState = {
  loading: false,
  user: null,
  error: null,
  emailCheck: emailCheckState.DEFAULT,
};

export default (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case AUTH_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case AUTH_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case EMAIL_CHECK_START:
      return { ...state, emailCheck: emailCheckState.LOADING };
    case EMAIL_CHECK_SUCCESS:
      return {
        ...state,
        emailCheck: emailCheckState.SUCCESS,
      };
    case EMAIL_CHECK_FAIL:
      return {
        ...state,
        emailCheck: emailCheckState.FAIL,
      };
    case EMAIL_CHECK_ERROR:
      return {
        ...state,
        emailCheck: emailCheckState.ERROR,
      };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        user: null,
        emailCheck: emailCheckState.DEFAULT,
      };
    default:
      return state;
  }
};
