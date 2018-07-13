import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import headers from './headers';
import events from './events';

const rootReducer = combineReducers({
  user,
  flash,
  headers,
  events,
});

export default rootReducer;
