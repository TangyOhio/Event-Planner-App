import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import headers from './headers';

const rootReducer = combineReducers({
  user,
  flash,
  headers,
});

export default rootReducer;
