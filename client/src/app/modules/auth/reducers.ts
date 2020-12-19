import { GetBooksSuccess, AddBookSuccess } from '../book/types';
import {
  AUTH_FAIL,
  AUTH_START,
  AUTH_SUCCESS,
  EMAIL_CHECK_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from './actions';
import { AuthActionTypes, AuthState } from './types';

const initialState: AuthState = {
  loading: false,
  auth: null,
  error: null,
  emailChecked: false,
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
      };
    case AUTH_SUCCESS:
      return { ...state, auth: action.payload };
    case EMAIL_CHECK_SUCCESS:
      return { ...state, emailChecked: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, auth: action.payload };
    case LOGOUT_SUCCESS:
      return { ...state, auth: null };
    default:
      return state;
  }
};
