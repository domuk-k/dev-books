import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import bookReducer from './book/reducer';
import { History } from 'history';
// The top-level state object

const rootReducer = (history: History<unknown>) =>
  combineReducers({ book: bookReducer, router: connectRouter(history) });

export type CombinedState = ReturnType<ReturnType<typeof rootReducer>>;

export default rootReducer;
