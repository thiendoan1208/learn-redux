import { combineReducers } from 'redux';
import counterReducer /*reducer*/ from './counterReducer.js'

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;

