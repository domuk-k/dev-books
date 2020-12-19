import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { AuthInfo } from '../types';
import {
  START_AUTH,
  START_EMAIL_CHECK,
  START_LOGIN,
  START_LOGOUT,
} from './action';
import service from '../../../../services';
import {
  authFail,
  authStart,
  authSuccess,
  emailCheckFail,
  emailCheckStart,
  emailCheckSuccess,
  loginSuccess,
} from '../actions';

export const startAuth = () => ({
  type: START_AUTH,
});

export const startEmailCheck = (payload: Partial<AuthInfo>) => ({
  type: START_EMAIL_CHECK,
  payload: payload,
});

export const startLogin = (payload: Partial<AuthInfo>) => ({
  type: START_LOGIN,
  payload: payload,
});

export const startLogout = (payload: Partial<AuthInfo>) => ({
  type: START_LOGOUT,
  payload: payload,
});

function* startAuthSaga() {
  try {
    yield put(authStart());
    const user = yield call(service.user.auth);
    yield put(authSuccess(user));
  } catch (error) {
    yield put(authFail(error));
  }
}
function* startLoginSaga(action: ReturnType<typeof startLogin>) {
  try {
    yield put(authStart());
    const { user } = yield call(service.user.login, action.payload);
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(authFail(error));
  }
}

function* startEmailCheckSaga(action: ReturnType<typeof startEmailCheck>) {
  try {
    yield put(emailCheckStart());
    yield delay(250);
    const { data } = yield call(service.user.checkEmail, action.payload);
    if (data.result) yield put(emailCheckSuccess());
    else yield put(emailCheckFail());
  } catch (error) {
    yield put(authFail(error));
  }
}

export default function* booksSaga() {
  yield takeLatest(START_AUTH, startAuthSaga);
  yield takeLatest(START_LOGIN, startLoginSaga);
  yield takeLatest(START_EMAIL_CHECK, startEmailCheckSaga);
}
