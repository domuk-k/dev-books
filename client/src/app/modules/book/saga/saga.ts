import { call, put, takeLatest } from 'redux-saga/effects';
import service from '../../../../services';
import {
  addBooksSuccess,
  deleteBooksSuccess,
  fail,
  getBooksSuccess,
  start,
  updateBooksSuccess,
} from '../actions';
import { AddBookSuccess, BookInfo } from '../types';
import {
  START_GET_BOOK,
  START_ADD_BOOK,
  START_UPDATE_BOOK,
  START_DELETE_BOOK,
} from './actions';

export const startGetBooks = () => ({
  type: START_GET_BOOK,
});

export const startAddBook = (payload: Partial<BookInfo>) => ({
  type: START_ADD_BOOK,
  payload: payload,
});

export const startUpdateBook = (payload: Partial<BookInfo>) => ({
  type: START_UPDATE_BOOK,
  payload: payload,
});

export const startDeleteBook = (payload: Partial<BookInfo>) => ({
  type: START_DELETE_BOOK,
  payload: payload,
});

function* startGetBooksSaga() {
  try {
    yield put(start());
    const books = yield call(service.book.get);
    yield put(getBooksSuccess(books));
  } catch (error) {
    yield put(fail(error));
  }
}

function* startAddBooksSaga(action: AddBookSuccess) {
  try {
    yield put(start());
    const { documents } = yield call(service.book.search, action.payload.title);
    yield (action.payload.imgURL = documents[0].thumbnail);
    const book = yield call(service.book.add, action.payload);
    yield put(addBooksSuccess(book));
  } catch (error) {
    yield put(fail(error));
  }
}

function* startUpdateBooksSaga() {
  try {
    yield put(start());
    const books = yield call(service.book.get);
    yield put(updateBooksSuccess(books));
  } catch (error) {
    yield put(fail(error));
  }
}

function* startDeleteBooksSaga() {
  try {
    yield call(service.book.remove);
    yield put(deleteBooksSuccess());
  } catch (error) {
    yield put(fail());
  }
}

export default function* booksSaga() {
  yield takeLatest(START_GET_BOOK, startGetBooksSaga);
  yield takeLatest(START_ADD_BOOK, startAddBooksSaga);
  yield takeLatest(START_UPDATE_BOOK, startUpdateBooksSaga);
  yield takeLatest(START_DELETE_BOOK, startDeleteBooksSaga);
}
