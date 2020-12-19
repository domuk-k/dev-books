import {
  AUTH_FAIL,
  AUTH_START,
  AUTH_SUCCESS,
  EMAIL_CHECK_START,
  EMAIL_CHECK_FAIL,
  EMAIL_CHECK_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from './actions';
import { AuthActionTypes, AuthState } from './types';

const initialState: AuthState = {
  loading: false,
  checkingEmail: false,
  user: null,
  error: null,
  emailChecked: null,
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
      return { ...state, checkingEmail: true };
    case EMAIL_CHECK_SUCCESS:
      return { ...state, emailChecked: true, checkingEmail: false };
    case EMAIL_CHECK_FAIL:
      return { ...state, emailChecked: false };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case LOGOUT_SUCCESS:
      return { ...state, user: null };
    default:
      return state;
  }
};
