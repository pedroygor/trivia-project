import { combineReducers } from 'redux';
import game from './game';
import token from './token';

const rootReducer = combineReducers({
  game,
  token,
});

export default rootReducer;
