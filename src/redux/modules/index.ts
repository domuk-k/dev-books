import { combineReducers } from 'redux';
import book from './book/reducer';

const rootReducer = combineReducers({ book });

export default rootReducer;
