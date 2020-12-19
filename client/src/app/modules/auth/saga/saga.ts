import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthInfo } from '../types';
import {
  START_AUTH,
  START_EMAIL_CHECK,
  START_LOGIN_CHECK,
  START_LOGOUT_CHECK,
} from './action';
import AuthService from '../../../../services/Auth';
import { authFail, authStart, authSuccess } from '../actions';

export const startAuth = () => ({
  type: START_AUTH,
});

export const startEmailCheck = (payload: AuthInfo) => ({
  type: START_EMAIL_CHECK,
  payload: payload,
});

export const startLogin = (payload: Partial<AuthInfo>) => ({
  type: START_LOGIN_CHECK,
  payload: payload,
});

export const startLogout = (payload: Partial<AuthInfo>) => ({
  type: START_LOGOUT_CHECK,
  payload: payload,
});

function* startAuthSaga() {
  try {
    yield put(authStart());
    const user = yield call(AuthService.auth);
    yield put(authSuccess(user));
  } catch (error) {
    yield put(authFail(error));
  }
}

export default function* booksSaga() {
  yield takeLatest(START_AUTH, startAuthSaga);
}
